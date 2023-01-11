import { CardData, CardKey } from '@sctavern/data'
import { Descriptor } from '../types'
import TD from './terran'

export function CreateDescriptorTable() {
  const result: Record<string, Descriptor> = {
    ...TD(),
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
