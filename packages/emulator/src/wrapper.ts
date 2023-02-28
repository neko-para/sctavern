import { GameInstance } from './game'
import { Server } from './server'
import type { GameConfig } from './types'
import defaultManager from './serialize'
import {
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
} from '@sctavern/data'
import { ServerAdapter } from './adapter'

export interface PortableSave {
  old: string[]
  new: string[]
}

export class Wrapper {
  server: Server
  adapter: ServerAdapter
  game: GameInstance
  save: PortableSave

  loading: boolean

  saveStateChanged: () => void

  constructor(a: ServerAdapter) {
    this.server = new Server()
    this.server.notify.push(() => {
      if (!this.loading) {
        this.autoSave()
      }
    })
    this.adapter = a
    this.adapter.onInput = msg => {
      this.game.input(msg)
    }
    this.server.notify.push(state => {
      this.adapter.setState(state)
    })
    this.game = new GameInstance(
      {
        Pack: ['核心'],
        Seed: 1,
        Role: [['白板']],
        Mutation: [],
        Pve: false,
        PoolPack: PresetPoolPack,
        ActivePack: PvpPresetActivePack,
        ActiveUnit: PvpPresetActiveUnit,
      },
      this.server
    )
    this.save = {
      old: [defaultManager.serialize(this.game)],
      new: [],
    }

    this.loading = false

    this.saveStateChanged = () => void 0
  }

  unbind() {
    this.game.$ignore$Server = new Server()
  }

  bind() {
    this.game.$ignore$Server = this.server
    this.loading = true
    this.server.emit(this.game.getState())
    this.loading = false
  }

  init(cfg: GameConfig) {
    this.unbind()
    this.game = new GameInstance(cfg, this.server)
    this.save = {
      old: [defaultManager.serialize(this.game)],
      new: [],
    }
    this.saveStateChanged()
  }

  load(save: PortableSave) {
    // this.save = save
    this.save = JSON.parse(JSON.stringify(save))
    this.loadActive()
  }

  loadActive() {
    this.unbind()
    this.game = defaultManager.deserialize(
      this.save.old[this.save.old.length - 1]
    ) as GameInstance
    this.bind()
    this.saveStateChanged()
  }

  undo() {
    if (this.save.old.length > 1) {
      this.save.new.push(this.save.old.pop() as string)
      this.loadActive()
    }
  }

  redo() {
    if (this.save.new.length > 0) {
      this.save.old.push(this.save.new.pop() as string)
      this.loadActive()
    }
  }

  getState() {
    return {
      canRedo: this.save.new.length > 0,
      canUndo: this.save.old.length > 1,
    }
  }

  autoSave() {
    this.save.new = []
    this.save.old.push(defaultManager.serialize(this.game))
    this.saveStateChanged()
  }
}
