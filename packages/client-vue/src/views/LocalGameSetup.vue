<script setup lang="ts">
import { reactive, computed } from 'vue'
import GameConfigVue from '@/components/GameConfig.vue'
import type { GameConfig } from '@sctavern/emulator'
import { useRouter } from 'vue-router'
import {
  PvpPresetActivePack,
  PvePresetActivePack,
  PresetPoolPack,
  type PackKey,
  PvePresetActiveUnit,
  PvpPresetActiveUnit,
  type UnitKey,
} from '@sctavern/data'

const router = useRouter()

const config = reactive<GameConfig>({
  Pack: ['核心'],
  Seed: Math.round(Math.random() * 100000000),
  Role: ['白板'],
  Mutation: [],

  Pve: false,
  PoolPack: PresetPoolPack,
  ActivePack: computed(() => {
    return config.Pve ? PvePresetActivePack : PvpPresetActivePack
  }) as unknown as PackKey[],
  ActiveUnit: computed(() => {
    return config.Pve ? PvePresetActiveUnit : PvpPresetActiveUnit
  }) as unknown as UnitKey[],
}) as GameConfig

function startGame() {
  router.push({
    name: 'local-player',
    query: {
      config: JSON.stringify(config),
    },
  })
}
</script>

<template>
  <game-config-vue
    class="justify-center"
    v-model:Pack="config.Pack"
    v-model:Seed="config.Seed"
    v-model:Role="config.Role"
    v-model:Mutation="config.Mutation"
    v-model:Pve="config.Pve"
    @ok="startGame()"
  ></game-config-vue>
</template>
