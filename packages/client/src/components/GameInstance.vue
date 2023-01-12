<script setup lang="ts">
import { computed } from 'vue'
import type { ClientViewData } from '@sctavern/emulator'
import { useMobileStore } from '@/stores/mobile'
import AutoButton from './AutoButton.vue'

const mobile = useMobileStore()

const props = defineProps<{
  state: ClientViewData
  player: number
}>()

const pl = computed(() => {
  return props.state.player[props.player]
})
</script>

<template>
  <div class="d-flex flex-column pa-2">
    <div class="d-flex">
      <div class="d-flex flex-column">
        <span class="Info">
          回合 {{ state.round }} 等级 {{ pl?.level }} 生命
          {{ pl?.life }}
        </span>
        <span class="Info">
          升级 {{ pl?.upgrade_cost }} 晶矿 {{ pl?.mineral }} /
          {{ pl?.mineral_max }} 瓦斯 {{ pl?.gas }} / {{ pl?.gas_max }}
        </span>
        <div class="d-flex">
          <auto-button accelerator="w">升级</auto-button>
          <auto-button accelerator="r">刷新</auto-button>
          <auto-button accelerator="c">锁定</auto-button>
          <auto-button accelerator="z">结束</auto-button>
          <auto-button accelerator="a">{{ pl?.role.ability }}</auto-button>
        </div>
        <div>{{ pl?.hand }}</div>
      </div>
      <div>{{ pl?.store }}</div>
    </div>
    <div>{{ pl?.present }}</div>
  </div>
</template>

<style scoped>
@media (min-height: 600px) {
  .Info {
    font-size: 16pt;
    font-weight: 500;
  }
}
</style>
