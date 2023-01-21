import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { PortableSave } from '@sctavern/emulator'
import Zip from 'jszip'
import FileSaver from 'file-saver'

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

  async function Download() {
    const data = JSON.stringify(save.value)
    const zip = Zip()
    zip.file('save.txt', data)
    const content = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
    })
    FileSaver.saveAs(content, 'save.SCTReplay')
  }

  async function Upload(data: Blob) {
    const zip = await Zip.loadAsync(data)
    save.value = JSON.parse(
      (await zip.file('save.txt')?.async('string')) || '{}'
    )
  }

  return {
    save,
    SaveStorage,
    LoadStorage,
    CleanStorage,
    Download,
    Upload,
  }
})
