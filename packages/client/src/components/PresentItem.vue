<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import { ref, computed } from 'vue'
import type { ClientViewData, GameInstance } from '@sctavern/emulator'
import type { UnitKey } from '@sctavern/data'

const props = defineProps<{
  state: ClientViewData
  game: GameInstance
  player: number
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.player]?.present[props.place] || null
})

const color = computed(() => {
  const c = item.value?.card?.color || 'normal'
  return c !== 'normal' ? (c === 'gold' ? 'yellow' : c) : ''
})

const tr = {
  upgrade: '升级',
  sell: '出售',
  insert: '这里',
  deploy: '这里',
}

const descDlg = ref(false)
const unitDlg = ref(false)

function buildUnit(units: UnitKey[]) {
  const set: Partial<Record<UnitKey, number>> = {}
  units.forEach(u => {
    set[u] = (set[u] || 0) + 1
  })
  return Object.keys(set)
    .map(u => `${u}\t${set[u as UnitKey]}`)
    .join('\n')
}
</script>

<template>
  <v-card class="d-flex flex-column align-self-start PresCard" :color="color">
    <template v-if="item">
      <template v-if="item.card">
        <v-dialog v-model="descDlg">
          <v-card class="w-50 mx-auto">
            <v-card-text>
              <pre>{{ item.card.descs.join('\n\n') }}</pre>
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-dialog v-model="unitDlg">
          <v-card class="w-25 mx-auto">
            <v-card-text class="d-flex">
              <pre class="mx-auto">{{ buildUnit(item.card.units) }}</pre>
            </v-card-text>
          </v-card>
        </v-dialog>

        <div class="d-flex">
          <auto-button variant="text" @click="descDlg = true">
            描述
          </auto-button>
          <auto-button variant="text" @click="unitDlg = true">
            单位
          </auto-button>
        </div>
        <div class="d-flex">
          <race-icon v-if="item?.card" :race="item.card.race"></race-icon>
          <span class="Label">
            {{ item.card.level }}
          </span>
          <span class="Label ml-auto mr-1">
            {{ item.card.value }}
          </span>
        </div>
        <span class="Label">
          {{ item.card.name }}
        </span>
        <span class="Info">
          {{ item.card.notes.join('\n') }}
        </span>
      </template>
      <div class="d-flex mt-auto">
        <auto-button
          variant="text"
          v-for="(a, i) in item.actions || []"
          :key="`PA-${i}`"
          :disabled="!a.enable"
          @click="game.post(a.msg)"
        >
          {{ tr[a.action] }}
        </auto-button>
      </div>
    </template>
  </v-card>
</template>
