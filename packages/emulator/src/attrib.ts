export class Attribute {
  value: Record<string, number>

  constructor() {
    this.value = {}
  }

  get(key: string, def = 0) {
    return this.value[key] || def
  }

  set(key: string, val: number) {
    this.value[key] = val
  }

  alter(key: string, dlt: number) {
    this.value[key] = this.get(key) + dlt
  }
}
