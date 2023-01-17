<script setup lang="ts">
import { ref } from 'vue'
import AutoButton from '@/components/AutoButton.vue'
import {
  type GameState,
  Wrapper,
  Client,
  type GameConfig,
} from '@sctavern/emulator'
import GameInstanceVue from '@/components/GameInstance.vue'
import { useSaveStore } from '@/stores/save'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps<{
  config: GameConfig
}>()

const saveStore = useSaveStore()
saveStore.LoadStorage()

const wrapper = new Wrapper()
const client = new Client(0, wrapper)

wrapper.init(props.config)

wrapper.game.start()

const saveState = ref({
  canUndo: false,
  canRedo: false,
})

const state = ref<GameState>(wrapper.game.getState())

wrapper.server.notify.push(st => {
  state.value = st
})

wrapper.saveStateChanged = () => {
  saveState.value = wrapper.getState()
}

function goUp() {
  router.back()
}
</script>

<template>
  <game-instance-vue :state="state" :client="client"></game-instance-vue>
  <v-card class="Debug d-flex flex-column">
    <span class="Label mx-auto">菜单</span>
    <div class="d-flex">
      <div class="d-flex flex-column">
        <auto-button variant="elevated" @click="goUp()"> 返回 </auto-button>
      </div>
      <div class="d-flex flex-column">
        <auto-button
          variant="elevated"
          :disabled="!saveState.canUndo"
          @click="wrapper.undo()"
        >
          撤销
        </auto-button>
        <auto-button
          variant="elevated"
          :disabled="!saveState.canRedo"
          @click="wrapper.redo()"
        >
          重做
        </auto-button>
        <auto-button
          variant="elevated"
          @click="saveStore.SaveStorage(wrapper.save)"
        >
          保存
        </auto-button>
        <auto-button
          variant="elevated"
          :disabled="!saveStore.save"
          @click="saveStore.save ? wrapper.load(saveStore.save) : void 0"
        >
          读取
        </auto-button>
        <auto-button
          variant="elevated"
          :disabled="!saveStore.save"
          @click="saveStore.CleanStorage()"
        >
          清除
        </auto-button>
      </div>
    </div>
  </v-card>
</template>
<style>
.Debug {
  position: fixed;
  right: 0;
  top: 0;
}
</style>
