<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import { computed } from 'vue'
import { CardData } from '@sctavern/data'
import type { GameState, Client, GameArea } from '@sctavern/emulator'

const props = defineProps<{
  state: GameState
  client: Client
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.client.pos]?.store[props.place] || null
})

const sel = computed(() => {
  return (
    props.state.player[props.client.pos]?.selected || {
      area: 'none' as GameArea,
      place: -1,
    }
  )
})

const tr = {
  enter: '购买',
  combine: '三连',
  stage: '暂存',
}

const isSel = computed(() => {
  return sel.value.area === 'store' && sel.value.place === props.place
})
</script>

<template>
  <v-card
    class="d-flex flex-column align-self-start KeyCard"
    :color="item && props.state.player[props.client.pos]?.locked ? 'cyan' : ''"
    :class="{
      selected: isSel,
      unselected: !isSel && !item?.special,
      special: !!item?.special,
    }"
    @click="
      client.autoPost(
        item
          ? { msg: '$select', area: 'store', place }
          : { msg: '$select', area: 'none', place: -1 }
      )
    "
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
