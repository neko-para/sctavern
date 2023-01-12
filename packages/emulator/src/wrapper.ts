import { GameInstance } from './game'
import { ClientViewData } from './types'

const watcher: Map<GameInstance, ((state: ClientViewData) => void)[]> =
  new Map()

export function Watch(
  game: GameInstance,
  func: (state: ClientViewData) => void
) {
  if (!watcher.has(game)) {
    watcher.set(game, [func])
  } else {
    watcher.get(game)?.push(func)
  }
}

export function PushState(game: GameInstance, state: ClientViewData) {
  watcher.get(game)?.forEach(f => f(state))
}
