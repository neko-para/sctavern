import { GameInstance } from './game'
import { Server } from './server'
import { GameConfig } from './types'
import defaultManager from './serialize'
import { PresetPoolPack, PvpPresetActivePack } from '@sctavern/data'

export interface PortableSave {
  old: string[]
  new: string[]
}

export class Wrapper {
  server: Server
  game: GameInstance
  save: PortableSave

  loading: boolean

  saveStateChanged: () => void

  constructor() {
    this.server = new Server()
    this.server.notify.push(() => {
      if (!this.loading) {
        this.autoSave()
      }
    })
    this.game = new GameInstance(
      {
        Pack: ['核心'],
        Seed: 1,
        Role: ['白板'],
        Mutation: [],
        Pve: false,
        PoolPack: PresetPoolPack,
        ActivePack: PvpPresetActivePack,
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
    this.save = save
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
