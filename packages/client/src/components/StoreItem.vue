<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import { computed } from 'vue'
import { CardData } from '@sctavern/data'
import type { GameState, Client } from '@sctavern/emulator'

const props = defineProps<{
  state: GameState
  client: Client
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.client.pos]?.store[props.place] || null
})

const tr = {
  enter: '购买',
  combine: '三连',
  stage: '暂存',
}
</script>

<template>
  <v-card
    class="d-flex flex-column align-self-start KeyCard"
    :color="item && props.state.player[props.client.pos]?.locked ? 'cyan' : ''"
  >
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
          @click="client.post(a.msg)"
        >
          {{ tr[a.action] }}
        </auto-button>
      </div>
    </template>
  </v-card>
</template>
