import { CardKey, UnitKey, UpgradeKey } from '@sctavern/data'
import { CardInstance } from './card'
import { PlayerInstance } from './player'
import { Descriptor, DiscoverContext, GameArea, ObtainUnitWay } from './types'

type ApplyKey<T, I> = T extends unknown ? T & I : never

export type InputMsg = ApplyKey<
  | {
      msg: '$upgrade'
    }
  | {
      msg: '$refresh'
    }
  | {
      msg: '$finish'
    }
  | {
      msg: '$ability'
    }
  | {
      msg: '$lock'
    }
  | {
      msg: '$unlock'
    }
  | {
      msg: '$select'
      place: number
      area: GameArea
    }
  | {
      msg: '$choice'
      place: number
      category: 'insert' | 'discover' | 'deploy'
    }
  | ApplyKey<
      | {
          area: 'store'
          action: 'enter' | 'combine' | 'stage'
        }
      | {
          area: 'hand'
          action: 'enter' | 'combine' | 'sell'
        }
      | {
          area: 'present'
          action: 'upgrade' | 'sell'
        },
      {
        msg: '$action'
        place: number
      }
    >
  | ApplyKey<
      | {
          type: 'card'
          cardt: CardKey
        }
      | {
          type: 'unit'
          units: UnitKey[]
          place: number
        }
      | {
          type: 'resource'
        },
      {
        msg: '$cheat'
      }
    >,
  { player: number }
>

export type GameMsg = ApplyKey<
  | {
      msg: 'round-start'
    }
  | {
      msg: 'round-enter'
    }
  | {
      msg: 'round-end'
    }
  | {
      msg: 'round-leave'
    },
  {
    round: number
  }
>

export type PlayerMsg = ApplyKey<
  | {
      msg: 'tavern-upgraded'
      level: number
    }
  | {
      msg: 'store-refreshed'
    }
  | {
      msg: 'discover-finished'
      ctx: DiscoverContext
    }
  | {
      msg: 'card-entered'
      target: number
    }
  | {
      msg: 'card-combined'
      target: number
    }
  | {
      msg: 'card-selled'
      target: number
    }
  | {
      msg: 'upgrade-cancelled'
      target: number
    }
  | {
      msg: 'task-done'
      target: number
    }
  | {
      msg: 'infr-changed'
      target: number
    }
  | {
      msg: 'seize'
      target: number
      from: number
    }
  | {
      msg: 'incubate'
      units: UnitKey[]
      from: number
    }
  | {
      msg: 'inject'
      units: UnitKey[]
    }
  | {
      msg: 'wrap'
      units: UnitKey[]
      into: number | null
    }
  | {
      msg: 'discover-finish'
      choice: number
    }
  | {
      msg: 'insert-finish'
      choice: number
    }
  | {
      msg: 'deploy-finish'
      choice: number
    },
  {
    player: number
  }
>

export type CardMsg = ApplyKey<
  | {
      msg: 'obtain-unit'
      units: UnitKey[]
      way: ObtainUnitWay
      time: 'prev' | 'post'
    }
  | {
      msg: 'obtain-upgrade'
      upgrade: UpgradeKey
    }
  | {
      msg: 'fast-produce'
    }
  | {
      msg: 'req-incubate'
      id: number
    }
  | {
      msg: 'req-regroup'
      id: number
    }
  | {
      msg: 'obtain-darkness'
      darkness: number
    }
  | {
      msg: 'post-enter'
    }
  | {
      msg: 'post-sell'
    }
  | {
      msg: 'post-deploy'
      target: number
    },
  {
    player: number
    card: number
  }
>

export type InnerMsg = GameMsg | PlayerMsg | CardMsg | InputMsg

export type GenericListener<ThisType> = {
  [key in InnerMsg['msg']]?: (
    this: ThisType,
    msg: Extract<InnerMsg, { msg: key }>
  ) => void
}

export type SpecificListener<ThisType, ExtraType> = {
  [key in InnerMsg['msg']]?: (
    this: ThisType,
    msg: Extract<InnerMsg, { msg: key }>,
    extra: ExtraType
  ) => void
}
