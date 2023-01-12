<script setup lang="ts">
import { reactive } from 'vue'
import { GameInstance, Watch } from '@sctavern/emulator'
import GameInstanceVue from '@/components/GameInstance.vue'

const game = new GameInstance({
  Pack: ['核心'],
  Seed: 1,
  Role: ['白板'],
  Mutation: [],
})

game.start()

const state = reactive({
  state: game.getState(),
})

Watch(game, s => {
  state.state = s
})
</script>

<template>
  <game-instance-vue :state="state.state" :player="0"></game-instance-vue>
</template>
