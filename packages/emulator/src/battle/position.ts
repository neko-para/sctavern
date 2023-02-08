export class Position {
  x: number
  y: number

  constructor(xx = 0, yy = 0) {
    this.x = xx
    this.y = yy
  }

  add(p: Position) {
    return new Position(this.x + p.x, this.y + p.y)
  }

  sub(p: Position) {
    return new Position(this.x - p.x, this.y - p.y)
  }

  mul(f: number) {
    return new Position(this.x * f, this.y * f)
  }

  dis() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

  str() {
    return `${Math.round(this.x * 10000) / 10000},${
      Math.round(this.y * 10000) / 10000
    }`
  }

  norm() {
    const d = this.dis()
    return d === 0 ? new Position() : this.mul(1 / d)
  }

  /*
  trunc001() {
    // round to 0.01
    this.x = Math.round(this.x * 100) / 100
    this.y = Math.round(this.y * 100) / 100
    return this
  }
  */
}
