import { compress, decompress } from '../utils'
import { diff, patch, unpatch, type Delta } from './wrap'

export { diff, patch, unpatch, type Delta }

export class DiffCompressSync<T> {
  value: T

  constructor(init: T = {} as T) {
    this.value = init
  }

  directSet(buf: Buffer) {
    this.value = decompress<T>(buf)
  }

  directGet(): Buffer {
    return compress(this.value)
  }

  applyPatch(buf: Buffer) {
    this.value = patch(this.value, decompress<Delta>(buf))
  }

  createPatch(v: T): Buffer | null {
    const dlt = diff(this.value, v)
    if (!dlt) {
      return null
    }
    this.value = v
    return compress(dlt)
  }
}

export interface UndoRedoSave<T = unknown> {
  prev: (Delta | null)[]
  post: (Delta | null)[]
  current: T
}

export class UndoRedoSync<T = unknown> {
  prev: (Delta | null)[]
  post: (Delta | null)[]
  current: T

  onValueChanged: (v: T) => void

  constructor(cur: T, pre: (Delta | null)[] = [], pos: (Delta | null)[] = []) {
    this.prev = pre
    this.post = pos
    this.current = cur
    this.onValueChanged = () => void 0
  }

  static from<T>(save: UndoRedoSave<T>) {
    return new UndoRedoSync(save.current, save.prev, save.post)
  }

  do(value: T) {
    this.prev.push(diff(this.current, value) ?? null)
    this.post = []
    this.current = value
    this.onValueChanged(this.clone())
  }

  undo() {
    if (this.prev.length > 0) {
      const dlt = this.prev.pop() ?? null
      this.post.push(dlt)
      if (dlt) {
        this.current = unpatch(this.current, dlt)
        this.onValueChanged(this.clone())
        return true
      }
    }
    return false
  }

  redo() {
    if (this.post.length > 0) {
      const dlt = this.post.pop() ?? null
      this.prev.push(dlt)
      if (dlt) {
        this.current = patch(this.current, dlt)
        this.onValueChanged(this.clone())
        return true
      }
    }
    return false
  }

  clone() {
    return structuredClone(this.current)
  }
}
