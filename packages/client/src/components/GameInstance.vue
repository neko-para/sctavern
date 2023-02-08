<script setup lang="ts">
import { ref, computed } from 'vue'
import AutoButton from './AutoButton.vue'
import StoreItem from './StoreItem.vue'
import HandItem from './HandItem.vue'
import PresentItem from './PresentItem.vue'
import DiscoverItem from './DiscoverItem.vue'
import type { GameState, Client } from '@sctavern/emulator'

const props = defineProps<{
  state: GameState
  client: Client
}>()

const pl = computed(() => {
  return props.state.player[props.client.pos]
})

const tr = computed(() => {
  const r = pl.value?.role

  return {
    upgrade: '升级',
    refresh: '刷新',
    lock: '锁定',
    unlock: '解锁',
    finish: '结束',
    ability: r
      ? r.ability +
        (r.progress
          ? r.progress.max === -1
            ? ` ${r.progress.cur}`
            : ` ${r.progress.cur} / ${r.progress.max}`
          : '')
      : '魂姿',
  }
})

const showMenu = ref(true)
const showRole = ref(false)
</script>

<template>
  <div class="d-flex flex-column justify-center">
    <v-dialog v-model="showRole" class="w-50">
      <v-card class="d-flex flex-column">
        <span
          class="Info ma-4"
          v-for="(v, k) in pl?.role.record || {}"
          :key="`RI-${k}`"
        >
          {{ k }}: {{ v }}
        </span>
      </v-card>
    </v-dialog>

    <div class="d-flex">
      <v-card class="ControlPanel d-flex flex-column">
        <div class="ml-auto">
          <auto-button variant="flat" @click="showMenu = !showMenu">
            菜单
          </auto-button>
        </div>
        <template v-if="showMenu">
          <hr />
          <div class="d-flex" v-if="showMenu">
            <slot></slot>
          </div>
        </template>
      </v-card>

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
              v-for="(d, i) in pl?.discover?.item.slice(0, 4) || []"
              :key="`Discover${i}`"
              :state="state"
              :client="client"
              :place="i"
            ></discover-item>
          </div>
          <div v-if="pl?.discover?.item.length > 3" class="mt-1 mb-1">
            <discover-item
              class="ml-2"
              v-for="(d, i) in pl?.discover?.item.slice(4) || []"
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
        <div class="d-flex mt-auto mb-1">
          <auto-button
            class="ml-2"
            variant="elevated"
            v-for="(a, i) in pl?.action || []"
            :key="`GA-${i}`"
            :disabled="!a.enable"
            @click="client.post(a.msg)"
            :color="a.msg.msg === '$ability' && pl?.role.enhance ? 'red' : ''"
          >
            {{ tr[a.action] }}
          </auto-button>
          <auto-button
            v-if="pl?.role.record"
            class="ml-2"
            variant="elevated"
            @click="showRole = true"
            >信息</auto-button
          >
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
</template>

<style>
.StoreContainer,
.DiscoverContainer {
  display: flex;
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

.Mobile .StoreContainer,
.Mobile .DiscoverContainer {
  flex-direction: column;
}

.ControlPanel {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
