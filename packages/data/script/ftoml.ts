import fs from 'fs'
import TOML from '@ltd/j-toml'

function main() {
  const obj: any = fs
    .readdirSync('toml')
    .map(f => `toml/${f}`)
    .map(p =>
      TOML.parse(fs.readFileSync(p).toString(), {
        bigint: false,
      })
    )
    .reduce(
      (p, c) => ({
        ...p,
        ...c,
      }),
      {}
    )
  fs.writeFileSync(
    'src/data.ts',
    `import type { Amon, Card, Unit, Role, Upgrade, Mutation, Prophesy } from './types'

export type AmonKey = ${obj.amon
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllAmon: AmonKey[] = ${JSON.stringify(
      obj.amon.map((o: any) => o.name)
    )}
export const AmonData: Record<AmonKey, Amon> = ${(() => {
      const data: any = {}
      obj.amon.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}
  
export type CardKey = ${obj.card
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllCard: CardKey[] = ${JSON.stringify(
      obj.card.map((o: any) => o.name)
    )}
export const CardData: Record<CardKey, Card> = ${(() => {
      const data: any = {}
      obj.card.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type UnitKey = ${obj.unit
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllUnit: UnitKey[] = ${JSON.stringify(
      obj.unit.map((o: any) => o.name)
    )}
export const UnitData: Record<UnitKey, Unit> = ${(() => {
      const data: any = {}
      obj.unit.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type RoleKey = ${obj.role
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllRole: RoleKey[] = ${JSON.stringify(
      obj.role.map((o: any) => o.name)
    )}
export const RoleData: Record<RoleKey, Role> = ${(() => {
      const data: any = {}
      obj.role.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type UpgradeKey = ${obj.upgrade
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllUpgrade: UpgradeKey[] = ${JSON.stringify(
      obj.upgrade.map((o: any) => o.name)
    )}
export const UpgradeData: Record<UpgradeKey, Upgrade> = ${(() => {
      const data: any = {}
      obj.upgrade.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type MutationKey = ${obj.mutation
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllMutation: MutationKey[] = ${JSON.stringify(
      obj.mutation.map((o: any) => o.name)
    )}
export const MutationData: Record<MutationKey, Mutation> = ${(() => {
      const data: any = {}
      obj.mutation.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type ProphesyKey = ${obj.prophesy
      .map((o: any) => JSON.stringify(o.name))
      .join('|')}
export const AllProphesy: ProphesyKey[] = ${JSON.stringify(
      obj.prophesy.map((o: any) => o.name)
    )}
export const ProphesyData: Record<ProphesyKey, Prophesy> = ${(() => {
      const data: any = {}
      obj.prophesy.forEach((k: any) => {
        data[k.name] = k
      })
      return JSON.stringify(data, null, 2)
    })()}

export type PackKey = ${Object.keys(obj.pack)
      .map(x => JSON.stringify(x))
      .join('|')}
export const PackData: Record<PackKey, CardKey[]> = ${(() => {
      return JSON.stringify(obj.pack, null, 2)
    })()}

export const ExtPack: PackKey[] = ${JSON.stringify(obj.extPack)}
export const PresetPoolPack: PackKey[] = ${JSON.stringify(obj.poolPack)}
export const RandomUpgrade: UpgradeKey[] = ${JSON.stringify(obj.randomUpgrade)}
export const ArchonUpgrade: UpgradeKey[] = ${JSON.stringify(obj.archonUpgrade)}
export const PvpPresetActivePack: PackKey[] = ${JSON.stringify(obj.pvp.pack)}
export const PvePresetActivePack: PackKey[] = ${JSON.stringify(obj.pve.pack)}
export const PvpPresetActiveUnit: UnitKey[] = ${JSON.stringify(obj.pvp.unit)}
export const PvePresetActiveUnit: UnitKey[] = ${JSON.stringify(obj.pve.unit)}
`
  )
}

main()
