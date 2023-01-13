<script setup lang="ts">
import { reactive } from 'vue'
import AutoButton from '@/components/AutoButton.vue'
import {
  Serialize,
  Deserialize,
  Init,
  GameInstance,
  Watch,
  Unwatch,
  type ClientViewData,
} from '@sctavern/emulator'
import GameInstanceVue from '@/components/GameInstance.vue'
import { Compress, Decompress } from '@/utils'

Init()

let game = new GameInstance({
  Pack: ['核心'],
  Seed: 1,
  Role: ['白板'],
  Mutation: [],
})

game.start()

const state = reactive({
  state: game.getState(),
})

const TheWindow = window as unknown as Record<string, unknown>

const gameState: string[] = reactive([])

function update(s: ClientViewData) {
  gameState.push(Compress<Save>({ version: 0, data: Serialize(game) }))
  state.state = s
}

Watch(game, update)

gameState.push(Compress<Save>({ version: 0, data: Serialize(game) }))

interface Save {
  version: number
  data: string
}

function save() {
  return Compress<Save>({ version: 0, data: Serialize(game) })
}

TheWindow['save'] = save

function load(data: string) {
  const sav = Decompress<Save>(data)
  if (!sav) {
    return false
  }
  Unwatch(game, update)
  game = Deserialize(sav.data)
  Watch(game, update)
  state.state = game.getState()
}

TheWindow['load'] = load

function undo() {
  gameState.pop()
  load(gameState[gameState.length - 1])
}
</script>

<template>
  <game-instance-vue
    :state="state.state"
    :game="game"
    :player="0"
  ></game-instance-vue>
  <v-card class="Debug d-flex flex-column">
    <span class="Label mx-auto">调试</span>
    <div class="d-flex">
      <auto-button
        variant="elevated"
        v-if="gameState.length > 1"
        @click="undo()"
      >
        撤销 {{ gameState.length - 1 }}
      </auto-button>
    </div>
  </v-card>
</template>
<style>
.Debug {
  position: fixed;
  right: 0;
  top: 0;
}
</style>
