<script setup lang="ts">
import RaceIcon from './RaceIcon.vue'
import { computed } from 'vue'
import type { ClientViewData, GameInstance } from '@sctavern/emulator'

const props = defineProps<{
  state: ClientViewData
  game: GameInstance
  player: number
  place: number
}>()

const item = computed(() => {
  return props.state.player[props.player]?.discover?.item[props.place] || null
})
</script>

<template>
  <v-card
    class="d-flex flex-column align-self-start KeyCard"
    @click="
      game.post({
        msg: '$choice',
        category: 'discover',
        place,
        player,
      })
    "
  >
    <template v-if="item">
      <template v-if="item.type === 'card'">
        <div class="d-flex">
          <race-icon :race="item.card.race"></race-icon>
          <span class="Label ml-1">
            {{ item.card.name }}
          </span>
          <span class="Label ml-auto mr-1">
            {{ item.card.level }}
          </span>
        </div>
      </template>
      <template v-else-if="item.type === 'upgrade'">
        <span class="Label">
          {{ item.upgrade.name }}
        </span>
      </template>
      <template v-else>
        <span class="Label">
          {{ item.str }}
        </span>
      </template>
    </template>
  </v-card>
</template>
