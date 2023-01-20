<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  type Pack,
  type RoleKey,
  type MutationKey,
  ExtPack,
} from '@sctavern/data'
import { LCG } from '@sctavern/emulator'
import { useMobileStore } from '@/stores/mobile'

const mobileStore = useMobileStore()

const section = ref<'packseed' | 'role' | 'mutation'>('packseed')

const props = defineProps<{
  Pack: Pack[]
  Seed: number
  Role: RoleKey[]
  Mutation: MutationKey[]
}>()

const emit = defineEmits<{
  (e: 'update:Pack', p: Pack[]): void
  (e: 'update:Seed', s: number): void
  (e: 'ok'): void
}>()

const seed = computed({
  get() {
    return props.Seed
  },

  set(seed: number) {
    emit('update:Seed', seed)
  },
})

const pack = computed({
  get() {
    return props.Pack
  },

  set(pack: Pack[]) {
    emit('update:Pack', pack)
  },
})

function genSeed() {
  return Math.round(Math.random() * 100000000)
}

function genPack(): Pack[] {
  const lcg = new LCG(genSeed())
  return ['核心', ...lcg.shuffle(ExtPack.slice(1)).slice(0, 2)]
}
</script>

<template>
  <v-card class="d-flex flex-column">
    <template v-if="!mobileStore.isMobile || section === 'packseed'">
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="8">
          <v-text-field
            v-model="seed"
            density="compact"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn @click="seed = genSeed()"> 随机 </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="4" class="d-flex flex-column">
          <v-checkbox
            v-model="pack"
            v-for="p in ExtPack.slice(0, 4)"
            :key="`Pack-${p}`"
            :label="p"
            :value="p"
            density="compact"
            hide-details
          ></v-checkbox> </v-col
        ><v-col cols="4" class="d-flex flex-column">
          <v-checkbox
            v-model="pack"
            v-for="p in ExtPack.slice(4)"
            :key="`Pack-${p}`"
            :label="p"
            :value="p"
            density="compact"
            hide-details
          ></v-checkbox>
        </v-col>
        <v-col cols="2">
          <v-btn @click="pack = genPack()"> 随机 </v-btn>
        </v-col>
      </v-row>
    </template>
    <template v-if="!mobileStore.isMobile || section === 'role'">
      <v-row>
        <v-col> 暂时不支持选角色 </v-col>
      </v-row>
    </template>
    <template v-if="!mobileStore.isMobile || section === 'mutation'">
      <v-row>
        <v-col> 暂时不支持选突变因子 </v-col>
      </v-row>
    </template>
    <v-card-actions class="mt-auto">
      <template v-if="mobileStore.isMobile">
        <v-btn @click="section = 'packseed'"> 种子卡包 </v-btn>
        <v-btn @click="section = 'role'"> 角色 </v-btn>
        <v-btn @click="section = 'mutation'"> 突变因子 </v-btn>
      </template>
      <v-btn class="ml-auto" color="primary" @click="$emit('ok')"> 启动 </v-btn>
    </v-card-actions>
  </v-card>
</template>
