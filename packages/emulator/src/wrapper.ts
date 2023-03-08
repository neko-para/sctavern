import { GameInstance } from './game'
import { StateTransfer } from './stateTransfer'
import type { GameConfig, GameState } from './types'
import defaultManager from './serialize'
import {
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
} from '@sctavern/data'
import { ServerAdapter } from './adapter'
import { UndoRedoSave, UndoRedoSync } from './differ'

export const DefaultGameConfig: GameConfig = {
  Pack: ['核心'],
  Seed: 1,
  Role: [['白板']],
  Mutation: [],
  Pve: false,
  PoolPack: PresetPoolPack,
  ActivePack: PvpPresetActivePack,
  ActiveUnit: PvpPresetActiveUnit,
}

export class Wrapper {
  id: unknown

  stateTransfer: StateTransfer
  adapters: ServerAdapter[]
  game: GameInstance

  save: UndoRedoSync

  loading: boolean

  saveStateChanged: () => void
  gameDroped: (id: unknown) => void

  gameDropTimer: NodeJS.Timeout | number | null

  constructor(id: unknown = null) {
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
    this.save = new UndoRedoSync(
      JSON.parse(defaultManager.serialize(this.game))
    )

    this.loading = false

    this.saveStateChanged = () => void 0
    this.gameDroped = () => void 0

    this.gameDropTimer = null
    this.triggerDrop()
  }

  addAdapter(adapter: ServerAdapter) {
    if (this.gameDropTimer) {
      console.log(`delete drop timer ${this.id}`)
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
      this.triggerDrop()
    }
  }

  triggerDrop() {
    console.log(`start drop timer of ${this.id}`)
    this.gameDropTimer = setTimeout(() => {
      this.gameDroped(this.id)
    }, 60 * 1000)
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
    this.save = new UndoRedoSync(
      JSON.parse(defaultManager.serialize(this.game))
    )
    this.saveStateChanged()
  }

  load(save: UndoRedoSave) {
    // this.save = save
    this.save = UndoRedoSync.from(save)
    this.loadActive()
  }

  loadActive() {
    this.unbind()
    this.game = defaultManager.deserialize(
      JSON.stringify(this.save.current)
    ) as GameInstance
    this.bind()
    this.saveStateChanged()
  }

  undo() {
    if (this.save.undo()) {
      this.loadActive()
    }
  }

  redo() {
    if (this.save.redo()) {
      this.loadActive()
    }
  }

  getState() {
    return {
      canRedo: this.save.post.length > 0,
      canUndo: this.save.prev.length > 1,
    }
  }

  autoSave() {
    this.save.do(JSON.parse(defaultManager.serialize(this.game)))
    this.saveStateChanged()
  }
}
