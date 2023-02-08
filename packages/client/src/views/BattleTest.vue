<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Battle, LCG, Position, UnitInstance } from '@sctavern/emulator'
import { UnitData } from '@sctavern/data'

const canvasEl = ref<HTMLCanvasElement | null>(null)

const battle = new Battle(new LCG(1))

function getRender(ctx: CanvasRenderingContext2D) {
  const circle = new Path2D()
  circle.ellipse(0, 0, 5, 5, 0, 0, Math.PI * 2)

  ctx.fillStyle = 'white'
  ctx.strokeStyle = 'black'
  return () => {
    ctx.save()
    ctx.fillRect(0, 0, 500, 500)

    battle.units.forEach(unit => {
      ctx.save()
      const hp = unit.life / unit.unit.health
      ctx.fillStyle = `rgb(${255 - hp * 255}, ${255 - hp * 255}, 255)`
      ctx.translate(unit.pos.x * 50, unit.pos.y * 50)
      ctx.fill(circle)
      ctx.stroke(circle)
      ctx.restore()
    })
    ctx.restore()
  }
}

onMounted(() => {
  const el = canvasEl.value as HTMLCanvasElement
  const ctx = el.getContext('2d') as CanvasRenderingContext2D
  const r = getRender(ctx)

  const lzdy = UnitData['陆战队员']
  const create = (x: number, y: number, g: number) => {
    const u = new UnitInstance(lzdy)
    u.pos = new Position(x, y)
    u.group = g
    return u
  }

  const gp = () => new Position(Math.random() - 0.5, Math.random() - 0.5).mul(2)

  for (let g = 0; g < 2; g++) {
    const s = g ? 9 : 1
    const start = new Position(s, s)
    for (let i = 0; i < 50; i++) {
      const { x, y } = start.add(gp())
      battle.units.push(create(x, y, g))
    }
  }

  battle.init()

  const h = setInterval(() => {
    battle.iterate()
    r()
  }, 10)

  battle.onFinish = () => {
    clearInterval(h)
  }
})
</script>

<template>
  <canvas width="500" height="500" ref="canvasEl"></canvas>
</template>
