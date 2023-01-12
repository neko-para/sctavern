<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import { computed } from 'vue'
import { CardData } from '@sctavern/data'
import type { ClientViewData, GameInstance } from '@sctavern/emulator'

const props = defineProps<{
  state: ClientViewData
  game: GameInstance
  player: number
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.player]?.store[props.place] || null
})

const tr = {
  enter: '购买',
  combine: '三连',
  stage: '暂存',
}
</script>

<template>
  <v-card class="d-flex flex-column align-self-start KeyCard">
    <template v-if="item">
      <div class="d-flex">
        <race-icon :race="CardData[item.card].race"></race-icon>
        <span class="Label ml-1">
          {{ item.card }}
        </span>
        <span class="Label ml-auto mr-1">
          {{ CardData[item.card].level }}
        </span>
      </div>
      <div class="d-flex mt-auto">
        <auto-button
          variant="text"
          v-for="(a, i) in item?.actions || []"
          :key="`SA-${i}`"
          :disabled="!a.enable"
          @click="game.post(a.msg)"
        >
          {{ tr[a.action] }}
        </auto-button>
      </div>
    </template>
  </v-card>
</template>
