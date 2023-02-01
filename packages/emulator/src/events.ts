import { CardKey, UnitKey, UpgradeKey } from '@sctavern/data'
import { CardInstance } from './card'
import { DiscoverContext, GameArea, ObtainUnitWay } from './types'

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
      msg: 'card-entered'
      target: CardInstance
    }
  | {
      msg: 'card-combined'
      target: CardInstance
    }
  | {
      msg: 'card-selled'
      target: CardInstance
    }
  | {
      msg: 'upgrade-cancelled'
      target: CardInstance
    }
  | {
      msg: 'task-done'
      target: CardInstance
    }
  | {
      msg: 'infr-changed'
      target: CardInstance
    }
  | {
      msg: 'seize'
      target: CardInstance
      from: CardInstance
    }
  | {
      msg: 'hatch'
      units: UnitKey[]
      from: CardInstance
    }
  | {
      msg: 'spawn'
      units: UnitKey[]
    }
  | {
      msg: 'warp'
      units: UnitKey[]
      into: CardInstance | null
    }
  | {
      msg: 'discover-finish'
      ctx: DiscoverContext
    }
  | {
      msg: 'get-buy-cost'
      time: 'dry' | 'real'
      cost: number
      action: 'enter' | 'combine' | 'stage'
      cardt: CardKey
      place: number
    }
  | {
      msg: 'get-refresh-cost'
      time: 'dry' | 'real'
      cost: number
    }
  | {
      msg: 'bought'
      action: 'enter' | 'combine' | 'stage'
      cardt: CardKey
      place: number
    }
  | {
      msg: 'refreshed'
    }
  | {
      msg: 'get-extra-void'
      void: number
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
      msg: 'req-hatch'
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
      target: CardInstance
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
