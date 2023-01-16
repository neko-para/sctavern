import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PortableSave } from '@sctavern/emulator'

export const useSaveStore = defineStore('save', () => {
  const save = ref<PortableSave | null>(null)

  function SaveStorage(s: PortableSave) {
    save.value = s
    localStorage.setItem(
      'save',
      JSON.stringify({
        save: save.value,
      })
    )
  }

  function LoadStorage() {
    try {
      const { save: s } = JSON.parse(localStorage.getItem('save') as string)
      save.value = s
      return true
    } catch {
      save.value = null
      return false
    }
  }

  function CleanStorage() {
    localStorage.removeItem('save')
    save.value = null
  }

  return {
    save,
    SaveStorage,
    LoadStorage,
    CleanStorage,
  }
})
