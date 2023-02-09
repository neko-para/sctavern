<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  type PackKey,
  type RoleKey,
  type MutationKey,
  ExtPack,
} from '@sctavern/data'
import { LCG } from '@sctavern/emulator'
import { useBrowserStore } from '@/stores/browser'

const browserStore = useBrowserStore()

const section = ref<'packseed' | 'role' | 'mutation' | 'pve'>('packseed')

const props = defineProps<{
  Pack: PackKey[]
  Seed: number
  Role: RoleKey[]
  Mutation: MutationKey[]

  Pve: boolean
}>()

const emit = defineEmits<{
  (e: 'update:Pack', p: PackKey[]): void
  (e: 'update:Seed', s: number): void
  (e: 'update:Role', r: RoleKey[]): void
  (e: 'update:Pve', p: boolean): void
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

  set(pack: PackKey[]) {
    emit('update:Pack', pack)
  },
})

const role = computed({
  get() {
    return props.Role
  },

  set(role: RoleKey[]) {
    emit('update:Role', role)
  },
})

const pve = computed({
  get() {
    return props.Pve
  },

  set(pve: boolean) {
    emit('update:Pve', pve)
  },
})

const lcg = new LCG(genSeed())

function genSeed() {
  return Math.round(Math.random() * 100000000)
}

function genPack(): PackKey[] {
  return ['核心', ...lcg.shuffle(ExtPack.slice(1)).slice(0, 2)]
}

const AllRoleChoice = computed<RoleKey[]>(() => {
  return [
    '白板',
    '执政官',
    '狂热者',
    '陆战队员',
    '收割者',
    '幽灵',
    '感染虫',
    'SCV',
    '阿巴瑟',
    '工蜂',
    '王虫',
    '蟑螂',
    '副官',
    '追猎者',
    '使徒',
    '矿骡',
    '斯台特曼',
    '雷诺',
    '阿塔尼斯',
    '科学球',
    '母舰核心',
    '行星要塞',
    '拟态虫',
    '探机',
    '泰凯斯',
    '诺娃',
    '思旺',
    '跳虫',
    '混合体',
  ]
})

function genRole(): RoleKey[] {
  return lcg.shuffle(AllRoleChoice.value).slice(0, role.value.length)
}
</script>

<template>
  <v-card>
    <template v-if="!browserStore.isMobile || section === 'packseed'">
      <div class="d-flex">
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
      </div>
      <div class="d-flex">
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
      </div>
    </template>
    <template v-if="!browserStore.isMobile || section === 'role'">
      <div class="d-flex">
        <template v-if="role.length === 1">
          <v-col cols="1"></v-col>
          <v-col cols="8">
            <v-select
              hide-details
              density="compact"
              v-model="role[0]"
              :items="AllRoleChoice"
            ></v-select>
          </v-col>
          <v-col cols="2">
            <v-btn @click="role = genRole()"> 随机 </v-btn>
          </v-col>
        </template>
      </div>
    </template>
    <template v-if="!browserStore.isMobile || section === 'mutation'">
      <div class="d-flex">
        <v-col cols="1"></v-col>
        <v-col cols="8"> 暂时不支持选突变因子 </v-col>
      </div>
    </template>
    <template v-if="!browserStore.isMobile || section === 'pve'">
      <div class="d-flex">
        <v-col cols="1"></v-col>
        <v-col cols="8">
          <v-checkbox
            v-model="pve"
            density="compact"
            hide-details
            label="启用PVE内容"
          ></v-checkbox>
        </v-col>
      </div>
    </template>
    <div style="min-width: 500px"></div>
    <v-card-actions>
      <template v-if="browserStore.isMobile">
        <v-btn @click="section = 'packseed'"> 种子卡包 </v-btn>
        <v-btn @click="section = 'role'"> 角色 </v-btn>
        <v-btn @click="section = 'mutation'"> 突变因子 </v-btn>
        <v-btn @click="section = 'pve'"> PVE </v-btn>
      </template>
      <v-btn class="ml-auto" color="primary" @click="$emit('ok')"> 启动 </v-btn>
    </v-card-actions>
  </v-card>
</template>
