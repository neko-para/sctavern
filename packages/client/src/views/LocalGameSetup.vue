<script setup lang="ts">
import { reactive } from 'vue'
import GameConfigVue from '@/components/GameConfig.vue'
import type { GameConfig } from '@sctavern/emulator'
import { useRouter } from 'vue-router'
import { PvpPresetActivePack, PvpPresetPoolPack } from '@sctavern/data'

const router = useRouter()

const config = reactive<GameConfig>({
  Pack: ['核心'],
  Seed: Math.round(Math.random() * 100000000),
  Role: ['白板'],
  Mutation: [],

  PoolPack: PvpPresetPoolPack,
  ActivePack: PvpPresetActivePack,
})

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
  <v-container class="h-100">
    <v-row>
      <v-col>
        <game-config-vue
          class="h-100"
          v-model:Pack="config.Pack"
          v-model:Seed="config.Seed"
          v-model:Role="config.Role"
          v-model:Mutation="config.Mutation"
          @ok="startGame()"
        ></game-config-vue>
      </v-col>
    </v-row>
  </v-container>
</template>
