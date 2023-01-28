export class Attribute {
  value: Record<string, number>

  constructor() {
    this.value = {}
  }

  has(key: string) {
    return key in this.value
  }

  get(key: string, def = 0) {
    return this.has(key) ? this.value[key] : def
  }

  set(key: string, val: number) {
    this.value[key] = val
  }

  alter(key: string, dlt: number) {
    this.value[key] = this.get(key) + dlt
    return this.value[key]
  }

  load(attrib: Attribute, ignore: string[]) {
    for (const key of Object.keys(attrib.value).filter(
      s => !ignore.includes(s)
    )) {
      this.alter(key, attrib.get(key))
    }
  }
}
