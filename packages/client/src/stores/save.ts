import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSaveStore = defineStore('save', () => {
  const storageFlag = ref(false)
  const history = ref<string[]>([])

  storageFlag.value = TestStorage()

  function SaveStorage() {
    localStorage.setItem(
      'save',
      JSON.stringify({
        history: history.value,
      })
    )
    storageFlag.value = true
  }

  function TestStorage() {
    return !!localStorage.getItem('save')
  }

  function LoadStorage() {
    if (!TestStorage()) {
      return
    }
    const { history: h } = JSON.parse(localStorage.getItem('save') as string)
    history.value = h
  }

  function CleanStorage() {
    localStorage.removeItem('save')
    storageFlag.value = false
  }

  return {
    history,
    SaveStorage,
    TestStorage,
    LoadStorage,
    CleanStorage,
    storageFlag,
  }
})
