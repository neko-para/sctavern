import {
  AllRole,
  PresetPoolPack,
  PvpPresetActivePack,
  PvpPresetActiveUnit,
  RoleData,
} from '@sctavern/data'
import { Init, Wrapper, wsServerAdapters } from '@sctavern/emulator'

Init()

const wrappers = new Map<string, Wrapper>()

const rs = AllRole.filter(r => !RoleData[r].ext)

wsServerAdapters(6658, (adapter, search) => {
  const id = search.get('id')
  if (!id) {
    return
  }
  if (wrappers.has(id)) {
    const wrapper = wrappers.get(id) as Wrapper
    wrapper.addAdapter(adapter)
  } else {
    const wrapper = new Wrapper(adapter, id)
    console.log(`setup game ${id}`)
    wrapper.gameDroped = i => {
      console.log(`drop game ${i}`)
      wrappers.delete(i as string)
    }
    wrappers.set(id, wrapper)
    wrapper.init({
      Pack: ['核心'],
      Seed: Math.floor(Math.random() * 100000) || 1,
      Role: [[rs[Math.floor(Math.random() * rs.length)]]],
      Mutation: [],
      Pve: false,
      PoolPack: PresetPoolPack,
      ActivePack: PvpPresetActivePack,
      ActiveUnit: PvpPresetActiveUnit,
    })
    wrapper.game.start()
  }
})
