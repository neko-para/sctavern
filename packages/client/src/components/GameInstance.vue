<script setup lang="ts">
import AutoButton from './AutoButton.vue'
import StoreItem from './StoreItem.vue'
import HandItem from './HandItem.vue'
import PresentItem from './PresentItem.vue'
import DiscoverItem from './DiscoverItem.vue'
import { computed } from 'vue'
import type { ClientViewData, GameInstance } from '@sctavern/emulator'

const props = defineProps<{
  state: ClientViewData
  game: GameInstance
  player: number
}>()

const pl = computed(() => {
  return props.state.player[props.player]
})

const tr = computed(() => ({
  upgrade: '升级',
  refresh: '刷新',
  lock: '锁定',
  unlock: '解锁',
  finish: '结束',
  ability: pl.value?.role.ability || '魂姿',
}))
</script>

<template>
  <div class="d-flex flex-column pa-1">
    <div class="d-flex">
      <div class="d-flex flex-column">
        <span class="Info">
          回合 {{ state.round }} 等级 {{ pl?.level }} 生命 {{ pl?.life }} 价值
          {{
            pl?.present.map(c => c.card?.value || 0).reduce((a, b) => a + b, 0)
          }}
        </span>
        <span class="Info">
          升级 {{ pl?.upgrade_cost }} 晶矿 {{ pl?.mineral }} /
          {{ pl?.mineral_max }} 瓦斯 {{ pl?.gas }} / {{ pl?.gas_max }}
        </span>
        <div class="d-flex mt-auto">
          <auto-button
            variant="elevated"
            v-for="(a, i) in pl?.action || []"
            :key="`GA-${i}`"
            :disabled="!a.enable"
            @click="game.post(a.msg)"
          >
            {{ tr[a.action] }}
          </auto-button>
        </div>
        <div class="HandContainer">
          <div>
            <hand-item
              class="mt-1"
              v-for="i in 3"
              :key="`Hand${i - 1}`"
              :state="state"
              :game="game"
              :player="player"
              :place="i - 1"
            ></hand-item>
          </div>
          <div class="ml-1">
            <hand-item
              class="mt-1"
              v-for="i in 3"
              :key="`Hand${i + 2}`"
              :state="state"
              :game="game"
              :player="player"
              :place="i + 2"
            ></hand-item>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="StoreContainer">
          <div>
            <store-item
              class="ml-4 mt-1"
              v-for="(s, i) in state.player[player]?.store.slice(0, 3) || []"
              :key="`Store${i}`"
              :state="state"
              :game="game"
              :player="player"
              :place="i"
            ></store-item>
          </div>
          <div v-if="(state.player[player]?.store.length || 0) > 3">
            <store-item
              class="ml-4 mt-1"
              v-for="(s, i) in state.player[player]?.store.slice(3) || []"
              :key="`Store${i}`"
              :state="state"
              :game="game"
              :player="player"
              :place="i + 3"
            ></store-item>
          </div>
        </div>
        <div
          v-if="pl?.status === 'discover' && pl.discover"
          class="d-flex mt-2"
        >
          <discover-item
            class="ml-4"
            v-for="(d, i) in state.player[player]?.discover?.item || []"
            :key="`Discover${i}`"
            :state="state"
            :game="game"
            :player="player"
            :place="i"
          ></discover-item>
          <auto-button
            v-if="state.player[player]?.discover?.extra"
            @click="
              game.post({
                msg: '$choice',
                category: 'discover',
                place: -1,
                player,
              })
            "
          >
            {{ state.player[player]?.discover?.extra }}
          </auto-button>
        </div>
      </div>
    </div>
    <div class="PresentContainer">
      <present-item
        class="mt-1"
        v-for="i in 7"
        :key="`Present${i - 1}`"
        :state="state"
        :game="game"
        :player="player"
        :place="i - 1"
      ></present-item>
    </div>
  </div>
</template>

<style>
.StoreContainer {
  display: flex;
  flex-direction: column;
}
.StoreContainer > div {
  display: flex;
}
.HandContainer {
  display: flex;
}
.HandContainer > div {
  display: flex;
  flex-direction: column;
}
.PresentContainer {
  display: flex;
  justify-content: space-between;
}
@media (min-height: 600px) {
  .StoreContainer {
    flex-direction: row;
  }
}
</style>
