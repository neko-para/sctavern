<script setup lang="ts">
import { ref, computed } from 'vue'
import AutoButton from './AutoButton.vue'
import StoreItem from './StoreItem.vue'
import HandItem from './HandItem.vue'
import PresentItem from './PresentItem.vue'
import DiscoverItem from './DiscoverItem.vue'
import type { GameState, Client } from '@sctavern/emulator'
import { useMobileStore } from '@/stores/mobile'

const mobileStore = useMobileStore()

const props = defineProps<{
  state: GameState
  client: Client
}>()

const pl = computed(() => {
  return props.state.player[props.client.pos]
})

const tr = computed(() => ({
  upgrade: '升级',
  refresh: '刷新',
  lock: '锁定',
  unlock: '解锁',
  finish: '结束',
  ability: pl.value?.role.ability || '魂姿',
}))

const showMenu = ref(true)
</script>

<template>
  <div class="FullScreen">
    <div class="d-flex flex-column justify-center">
      <div class="d-flex">
        <v-card class="ControlPanel d-flex flex-column">
          <span v-if="!mobileStore.isMobile" class="Label mx-auto">菜单</span>
          <auto-button v-else @click="showMenu = !showMenu"> 菜单 </auto-button>
          <div class="d-flex" v-if="showMenu">
            <slot></slot>
          </div>
        </v-card>

        <div class="d-flex flex-column">
          <span class="Info">
            回合 {{ state.round }} 等级 {{ pl?.level }} 生命 {{ pl?.life }} 价值
            {{
              pl?.present
                .map(c => c.card?.value || 0)
                .reduce((a, b) => a + b, 0)
            }}
          </span>
          <span class="Info">
            升级 {{ pl?.upgrade_cost }} 晶矿 {{ pl?.mineral }} /
            {{ pl?.mineral_max }} 瓦斯 {{ pl?.gas }} / {{ pl?.gas_max }}
          </span>
          <div class="d-flex">
            <auto-button
              variant="elevated"
              v-for="(a, i) in pl?.action.slice(0, -1) || []"
              :key="`GA-${i}`"
              :disabled="!a.enable"
              @click="client.post(a.msg)"
            >
              {{ tr[a.action] }}
            </auto-button>
          </div>
          <div class="d-flex mt-1">
            <auto-button
              variant="elevated"
              v-for="(a, i) in pl?.action.slice(-1) || []"
              :key="`GA-/${i}`"
              :disabled="!a.enable"
              @click="client.post(a.msg)"
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
                :client="client"
                :place="i - 1"
              ></hand-item>
            </div>
            <div class="ml-1">
              <hand-item
                class="mt-1"
                v-for="i in 3"
                :key="`Hand${i + 2}`"
                :state="state"
                :client="client"
                :place="i + 2"
              ></hand-item>
            </div>
          </div>
        </div>
        <div class="d-flex flex-column">
          <div class="StoreContainer">
            <div class="mt-1">
              <store-item
                class="ml-2"
                v-for="(s, i) in pl?.store.slice(0, 3) || []"
                :key="`Store${i}`"
                :state="state"
                :client="client"
                :place="i"
              ></store-item>
            </div>
            <div v-if="(pl?.store.length || 0) > 3" class="mt-1">
              <store-item
                class="ml-2"
                v-for="(s, i) in pl?.store.slice(3) || []"
                :key="`Store${i + 3}`"
                :state="state"
                :client="client"
                :place="i + 3"
              ></store-item>
            </div>
          </div>
          <div
            v-if="pl?.status === 'discover' && pl.discover"
            class="d-flex mt-1 DiscoverContainer"
          >
            <div class="mt-1">
              <discover-item
                class="ml-2"
                v-for="(d, i) in pl?.discover?.item.slice(0, 3) || []"
                :key="`Discover${i}`"
                :state="state"
                :client="client"
                :place="i"
              ></discover-item>
            </div>
            <div v-if="pl?.discover?.item.length > 3" class="mt-1">
              <discover-item
                class="ml-2"
                v-for="(d, i) in pl?.discover?.item.slice(3) || []"
                :key="`Discover${i + 3}`"
                :state="state"
                :client="client"
                :place="i + 3"
              ></discover-item>
              <auto-button
                class="ml-2"
                v-if="pl?.discover?.extra"
                @click="
                  client.autoPost({
                    msg: '$choice',
                    category: 'discover',
                    place: -1,
                  })
                "
              >
                {{ pl?.discover?.extra }}
              </auto-button>
            </div>
          </div>
        </div>
      </div>
      <div class="PresentContainer">
        <present-item
          class="mt-1"
          v-for="i in 7"
          :key="`Present${i - 1}`"
          :state="state"
          :client="client"
          :place="i - 1"
        ></present-item>
      </div>
    </div>
  </div>
</template>

<style>
.StoreContainer,
.DiscoverContainer {
  display: flex;
  flex-direction: column;
}
.StoreContainer > div,
.DiscoverContainer > div {
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
}
@media (min-height: 600px) {
  .StoreContainer,
  .DiscoverContainer {
    flex-direction: row;
  }
}
.FullScreen {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: wheat;
}
.ControlPanel {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
