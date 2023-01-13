import { GameInstance } from './game'
import { ClientViewData } from './types'

const watcher: Map<GameInstance, ((state: ClientViewData) => void)[]> =
  new Map()

export function Watch(
  game: GameInstance,
  func: (state: ClientViewData) => void
): (state: ClientViewData) => void {
  if (!watcher.has(game)) {
    watcher.set(game, [func])
  } else {
    watcher.get(game)?.push(func)
  }
  return func
}

export function Unwatch(
  game: GameInstance,
  func: null | ((state: ClientViewData) => void)
) {
  if (func) {
    const arr = watcher.get(game)?.filter(f => f !== func) || []
    if (arr.length === 0) {
      watcher.delete(game)
    } else {
      watcher.set(game, arr)
    }
  } else {
    watcher.delete(game)
  }
}

export function PushState(game: GameInstance, state: ClientViewData) {
  watcher.get(game)?.forEach(f => f(state))
}
