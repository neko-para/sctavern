import type { CardKey } from '@sctavern/data'
import { CardData } from '@sctavern/data'
import type { Descriptor } from '../types'
import TD from './terran'
import ZD from './zerg'
import PD from './protoss'
import ND from './nuetral'
import SD from './special'

export function CreateDescriptorTable() {
  const result: Record<string, Descriptor> = {
    ...TD(),
    ...ZD(),
    ...PD(),
    ...ND(),
    ...SD(),
  }
  const $ = (key: string): [Descriptor, string[]] => {
    const d = key.split(':')
    return [result[d[0]], d.slice(1)]
  }
  const $$ = (key: string): [Descriptor, string[]] => {
    let [desc, extra] = $(key)
    while (desc.refer) {
      ;[desc, extra] = $(desc.refer)
    }
    return [desc, extra]
  }
  for (const key in result) {
    const m = /^(.+)(\d)$/.exec(key)
    if (m && m[1] in CardData && !result[key].text) {
      result[key].text = CardData[m[1] as CardKey].desc[Number(m[2])]
    }
  }
  for (const key in result) {
    if (!result[key].text) {
      const r = result[key].refer
      if (r) {
        const [rs] = $(r)
        result[key].text = rs.text
      }
    }
  }
  return $$
}

const t = CreateDescriptorTable()

export default t
