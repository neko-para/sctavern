import { GameInstance } from './game'
import { StateTransfer } from './stateTransfer'
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
  id: unknown

  stateTransfer: StateTransfer
  adapters: ServerAdapter[]
  game: GameInstance
  save: PortableSave

  loading: boolean

  saveStateChanged: () => void
  gameDroped: (id: unknown) => void

  gameDropTimer: NodeJS.Timeout | number | null

  constructor(a: ServerAdapter, id: unknown = null) {
    this.id = id

    this.stateTransfer = new StateTransfer()
    this.stateTransfer.notify.push(() => {
      if (!this.loading) {
        this.autoSave()
      }
    })
    this.adapters = []
    this.stateTransfer.notify.push(state => {
      this.adapters.forEach(a => {
        a.setState(state)
      })
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
      this.stateTransfer
    )
    this.save = {
      old: [defaultManager.serialize(this.game)],
      new: [],
    }

    this.loading = false

    this.saveStateChanged = () => void 0
    this.gameDroped = () => void 0

    this.gameDropTimer = null

    this.addAdapter(a)
  }

  addAdapter(adapter: ServerAdapter) {
    if (this.gameDropTimer) {
      clearTimeout(this.gameDropTimer)
      this.gameDropTimer = null
    }
    adapter.onInput = msg => {
      this.game.input(msg)
    }
    adapter.onClose = () => {
      this.removeAdapter(adapter)
    }
    this.adapters.push(adapter)
    adapter.setState(this.game.getState())
  }

  removeAdapter(adapter: ServerAdapter) {
    this.adapters = this.adapters.filter(a => a !== adapter)
    adapter.onInput = () => void 0
    if (this.adapters.length === 0) {
      console.log(`start drop timer of ${this.id}`)
      this.gameDropTimer = setTimeout(() => {
        this.gameDroped(this.id)
      }, 60 * 1000)
    }
  }

  unbind() {
    this.game.$ignore$StateTransfer = new StateTransfer()
  }

  bind() {
    this.game.$ignore$StateTransfer = this.stateTransfer
    this.loading = true
    this.stateTransfer.emit(this.game.getState())
    this.loading = false
  }

  init(cfg: GameConfig) {
    this.unbind()
    this.game = new GameInstance(cfg, this.stateTransfer)
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
