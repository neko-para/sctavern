<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import AutoSpan from './AutoSpan.vue'
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

const infoDlg = ref(false)

function buildUnit(units: UnitKey[]) {
  const set: Partial<Record<UnitKey, number>> = {}
  units.forEach(u => {
    set[u] = (set[u] || 0) + 1
  })
  return Object.keys(set).map(u => `${u}\t${set[u as UnitKey]}`)
}
</script>

<template>
  <v-card class="d-flex flex-column align-self-start PresCard" :color="color">
    <template v-if="item">
      <template v-if="item.card">
        <v-dialog v-model="infoDlg" class="w-75">
          <v-card class="d-flex flex-row InfoCard pa-2 justify-space-between">
            <div class="d-flex flex-column">
              <span class="Label">
                {{ item.card.name }}
              </span>
              <div class="d-flex">
                <race-icon :race="item.card.race"></race-icon>
                <span class="Label">
                  {{ item.card.level }}
                </span>
                <span class="Label ml-auto">
                  {{ item.card.value }}
                </span>
              </div>
              <div class="d-flex flex-column mt-2 overflow-y-auto">
                <auto-span :text="item.card.descs"></auto-span>
                <auto-span class="mt-2" :text="item.card.notes"></auto-span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <span class="Label">
                单位 {{ item.card.units.length }} /
                {{ item.card.config.MaxUnit }}
              </span>
              <auto-span
                class="overflow-y-auto"
                :text="buildUnit(item.card.units)"
              ></auto-span>
            </div>
            <div class="d-flex flex-column">
              <span class="Label">
                升级 {{ item.card.upgrades.length }} /
                {{ item.card.config.MaxUpgrade }}
              </span>
              <auto-span :text="item.card.upgrades"></auto-span>
            </div>
          </v-card>
        </v-dialog>

        <div class="d-flex">
          <auto-button variant="text" @click="infoDlg = true">
            信息
          </auto-button>
        </div>
        <span class="Label">
          {{ item.card.name }}
        </span>
        <div class="d-flex">
          <race-icon :race="item.card.race"></race-icon>
          <span class="Label">
            {{ item.card.level }}
          </span>
          <span class="Label ml-auto mr-1">
            {{ item.card.value }}
          </span>
        </div>
        <auto-span :text="item.card.notes"></auto-span>
        <div class="d-flex justify-space-between mt-auto">
          <span class="Info">
            {{ item.card.units.length }} / {{ item.card.config.MaxUnit }}
          </span>
          <span class="Info">
            {{ item.card.upgrades.length }} / {{ item.card.config.MaxUpgrade }}
          </span>
        </div>
      </template>
      <template v-else>
        <div class="mt-auto"></div>
      </template>
      <div class="d-flex">
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
