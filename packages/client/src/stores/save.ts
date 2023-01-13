import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSaveStore = defineStore('save', () => {
  const save = ref<string | null>(null)
  const history = ref<string[]>([])

  function SaveStorage() {
    localStorage.setItem(
      'save',
      JSON.stringify({
        save: save.value,
        history: history.value,
      })
    )
  }

  function TestStorage() {
    return !!localStorage.getItem('save')
  }

  function LoadStorage() {
    if (!TestStorage()) {
      return
    }
    const { save: s, history: h } = JSON.parse(
      localStorage.getItem('save') as string
    )
    save.value = s
    history.value = h
  }

  return { save, history, SaveStorage, TestStorage, LoadStorage }
})
