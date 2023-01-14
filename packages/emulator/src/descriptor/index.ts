import { CardData, CardKey } from '@sctavern/data'
import { Descriptor } from '../types'
import TD from './terran'
import ZD from './zerg'
import PD from './protoss'
import SD from './special'

export function CreateDescriptorTable() {
  const result: Record<string, Descriptor> = {
    ...TD(),
    ...ZD(),
    ...PD(),
    ...SD(),
  }
  for (const key in result) {
    const m = /^(.+)(\d)$/.exec(key)
    if (m && m[1] in CardData && !result[key].text) {
      result[key].text = CardData[m[1] as CardKey].desc[Number(m[2])]
    }
  }
  return result
}

const t = CreateDescriptorTable()

export default t
