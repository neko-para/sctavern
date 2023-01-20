<script setup lang="ts">
import { ref, computed } from 'vue'
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
import { AllUnit, CardData, CardPack, UnitData } from '@sctavern/data'

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

const player = computed(() => {
  return state.value.player[0]
})

wrapper.server.notify.push(st => {
  state.value = st
})

wrapper.saveStateChanged = () => {
  saveState.value = wrapper.getState()
}

function goUp() {
  router.back()
}

document.onkeydown = ev => {
  if (ev.shiftKey || ev.altKey) {
    return
  }
  if (ev.ctrlKey) {
    switch (ev.key) {
      case 'z':
        if (saveState.value.canUndo) {
          wrapper.undo()
        }
        break
      case 'y':
        if (saveState.value.canRedo) {
          wrapper.redo()
        }
        break
    }
    return
  }
  switch (ev.key) {
    case 'w':
      client.autoPost({
        msg: '$upgrade',
      })
      break
    case 'z':
      client.autoPost({
        msg: '$finish',
      })
      break
    case 'c':
      client.autoPost({
        msg: client.getPlayer()?.locked ? '$unlock' : '$lock',
      })
      break
    case 'r':
      client.autoPost({
        msg: '$refresh',
      })
      break
    default: {
      const player = state.value.player[client.pos]
      if (!player || player.selected.area === 'none') {
        break
      }
      for (const act of player[player.selected.area][player.selected.place]
        ?.actions || []) {
        if (ev.key === act.acckey) {
          client.post(act.msg)
          break
        }
      }
    }
  }
}

const getCardDlg = ref(false)
const getCardKey = ref('')
const getCardChoice = computed(() => {
  return state.value.config.ActivePack.map(p => CardPack[p])
    .reduce((r, x) => r.concat(x), [])
    .map(c => CardData[c])
    .map((card, index) => ({
      card,
      find: card.pinyin.indexOf(getCardKey.value),
      index,
    }))
    .filter(({ find }) => find !== -1)
    .sort((a, b) => {
      if (a.find !== b.find) {
        return a.find - b.find
      } else {
        return a.index - b.index
      }
    })
    .map(({ card }) => card)
    .slice(0, 10)
})

const getUnitDlg = ref(false)
const getUnitKey = ref('')
const getUnitChoice = computed(() => {
  return AllUnit.map(u => UnitData[u])
    .map((unit, index) => ({
      unit,
      find: unit.pinyin.indexOf(getUnitKey.value),
      index,
    }))
    .filter(({ find }) => find !== -1)
    .sort((a, b) => {
      if (a.find !== b.find) {
        return a.find - b.find
      } else {
        return a.index - b.index
      }
    })
    .map(({ unit }) => unit)
    .slice(0, 10)
})
</script>

<template>
  <game-instance-vue :state="state" :client="client"></game-instance-vue>

  <v-dialog v-model="getCardDlg">
    <v-card>
      <v-card-text>
        <v-text-field
          hide-details
          v-model="getCardKey"
          @keyup.enter="
            getCardChoice.length > 0 &&
              client.autoPost({
                msg: '$cheat',
                type: 'card',
                cardt: getCardChoice[0].name,
              })
          "
        ></v-text-field>
        <div class="d-flex flex-column">
          <auto-button
            variant="flat"
            v-for="(c, i) in getCardChoice"
            :class="{
              enterSelect: i === 0,
            }"
            :key="`GCChoice-${i}`"
            @click="
              client.autoPost({
                msg: '$cheat',
                type: 'card',
                cardt: c.name,
              })
            "
          >
            {{ c.pinyin }} {{ c.name }}
          </auto-button>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="getUnitDlg">
    <v-card>
      <v-card-text>
        <v-text-field
          hide-details
          v-model="getUnitKey"
          @keyup.enter="
            getUnitChoice.length > 0 &&
              client.autoPost({
                msg: '$cheat',
                type: 'unit',
                units: [getUnitChoice[0].name],
                place: player?.selected.place || 0,
              })
          "
        ></v-text-field>
        <div class="d-flex flex-column">
          <auto-button
            variant="flat"
            v-for="(u, i) in getUnitChoice"
            :class="{
              enterSelect: i === 0,
            }"
            :key="`GUChoice-${i}`"
            @click="
              client.autoPost({
                msg: '$cheat',
                type: 'unit',
                units: [u.name],
                place: player?.selected.place || 0,
              })
            "
          >
            {{ u.pinyin }} {{ u.name }}
          </auto-button>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-card class="Debug d-flex flex-column">
    <span class="Label mx-auto">菜单</span>
    <div class="d-flex">
      <div class="d-flex flex-column">
        <auto-button variant="elevated" @click="goUp()"> 返回 </auto-button>
        <auto-button variant="elevated" @click="getCardDlg = true">
          卡牌
        </auto-button>
        <auto-button
          variant="elevated"
          :disabled="player?.selected.area !== 'present'"
          @click="getUnitDlg = true"
        >
          单位
        </auto-button>
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
