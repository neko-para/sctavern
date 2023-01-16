import { Attribute } from '../attrib'
import { CardInstance } from '../card'
import { GameInstance, LCG } from '../game'
import { PlayerInstance } from '../player'
import { Pool } from '../pool'
import { postDeserialize, postSerialize, prevSerialize } from './utils'

export class ClassManager {
  protos: Record<string, object>
  indexs: Map<object, string>

  constructor() {
    this.protos = {}
    this.indexs = new Map()
  }

  register(name: string, proto: object) {
    if (name in this.protos) {
      if (this.protos[name] === proto) {
        console.log(`[WARN] ${name} already registered. skip`)
      }
      throw `${name} is already registered!`
    } else if (this.indexs.has(proto)) {
      throw `prototype of ${name} is already registered!`
    }
    this.protos[name] = proto
    this.indexs.set(proto, name)
  }

  autoRegister(classes: Record<string, { prototype: object }>) {
    for (const name in classes) {
      this.register(name, classes[name].prototype)
    }
  }

  serialize(object: unknown) {
    prevSerialize(object)
    const replacer = (key: string, value: unknown) => {
      if (key.startsWith('$ref$')) {
        return (value as Record<string, string>)['$id$']
      } else if (key.startsWith('$ignore$')) {
        return undefined
      }
      if (typeof value === 'object' && value !== null) {
        const p = Object.getPrototypeOf(value)
        if (p === Object.prototype || p === Array.prototype) {
          return value
        } else {
          const pname = this.indexs.get(p)
          if (pname) {
            return {
              ...value,
              $proto$: pname,
            }
          } else {
            this.register(value.constructor.name, p)
            console.log(
              '[WARN] Auto register prototype for class',
              value.constructor.name
            )
            return {
              ...value,
              $proto$: value.constructor.name,
            }
            // throw `unknown prototype ${p}`
          }
        }
      } else {
        return value
      }
    }
    const result = JSON.stringify(object, replacer)
    postSerialize(object)
    return result
  }

  deserialize(json: string): unknown {
    const reviver = (key: string, value: unknown) => {
      if (typeof value === 'object' && value !== null) {
        if ('$proto$' in value) {
          const pname = value.$proto$ as string
          if (pname in this.protos) {
            delete value.$proto$
            return Object.setPrototypeOf(value, this.protos[pname])
          } else {
            throw `prototype ${pname} not found`
          }
        } else {
          return value
        }
      } else {
        return value
      }
    }
    const obj = JSON.parse(json, reviver)
    postDeserialize(obj)
    return obj
  }
}

const defaultManager = new ClassManager()

export function initDefault() {
  defaultManager.autoRegister({
    GameInstance,
    PlayerInstance,
    CardInstance,
    Pool,
    LCG,
    Attribute,
  })
}

export default defaultManager
