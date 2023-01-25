<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import AutoButton from './AutoButton.vue'
import AutoSpan from './AutoSpan.vue'
import { ref, computed } from 'vue'
import type { GameState, Client, GameArea } from '@sctavern/emulator'
import type { UnitKey } from '@sctavern/data'
import { useBrowserStore } from '@/stores/browser'

const browserStore = useBrowserStore()

const props = defineProps<{
  state: GameState
  client: Client
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.client.pos]?.present[props.place] || null
})

const color = computed(() => {
  const c = item.value?.card?.color || 'normal'
  return c !== 'normal' ? (c === 'gold' ? 'yellow' : c) : ''
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

const units = computed(() => buildUnit(item.value?.card?.units || []))

const isSel = computed(() => {
  return sel.value.area === 'present' && sel.value.place === props.place
})
</script>

<template>
  <v-card
    class="d-flex flex-column align-self-start PresCard"
    :color="color"
    :class="{ selected: isSel, unselected: !isSel }"
    @click="
      client.autoPost(
        item?.card
          ? { msg: '$select', area: 'present', place }
          : { msg: '$select', area: 'none', place: -1 }
      )
    "
  >
    <template v-if="item">
      <template v-if="item.card">
        <v-dialog v-model="infoDlg" class="w-75">
          <v-card class="d-flex flex-row InfoCard pa-2 justify-space-between">
            <div class="d-flex flex-column DescCol overflow-y-auto">
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
            <div class="d-flex flex-column UnitCol">
              <span class="Label">
                单位 {{ item.card.units.length }} /
                {{ item.card.config.MaxUnit }}
              </span>
              <auto-span class="overflow-y-auto" :text="units"></auto-span>
            </div>
            <div class="d-flex flex-column UpgrCol">
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
        <div class="d-flex flex-column mt-auto">
          <div
            v-if="!browserStore.isMobile"
            class="d-flex justify-space-between Info"
          >
            <div class="d-flex flex-column">
              <span v-for="(u, i) in units.slice(0, 5)" :key="`Unit-${i}`">
                {{ u }}
              </span>
            </div>
            <div class="d-flex flex-column justify-end">
              <span v-for="(u, i) in item.card.upgrades" :key="`Upgrade-${i}`">
                {{ u }}
              </span>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <v-tooltip location="top">
              <template v-slot:activator="{ props: p }">
                <span class="Info" v-bind="p">
                  {{ item.card.units.length }} /
                  {{ item.card.config.MaxUnit }}
                </span>
              </template>
              <div class="d-flex flex-column">
                <span
                  class="Info"
                  v-for="(u, i) in units"
                  :key="`UnitTip-${i}`"
                >
                  {{ u }}
                </span>
              </div>
            </v-tooltip>
            <span class="Info">
              {{ item.card.upgrades.length }} /
              {{ item.card.config.MaxUpgrade }}
            </span>
          </div>
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
          @click="client.post(a.msg)"
        >
          {{ tr[a.action] }}
        </auto-button>
      </div>
    </template>
  </v-card>
</template>

<style>
.DescCol {
  flex: 3;
}

.UnitCol {
  margin-left: 8px;
  flex: 2;
}

.UpgrCol {
  margin-left: 4px;
  flex: 1;
}
</style>
