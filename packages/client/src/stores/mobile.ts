import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMobileStore = defineStore('mobile', () => {
  const isMobile = ref(false)

  function setMobile(im: boolean) {
    isMobile.value = im
  }

  return { isMobile, setMobile }
})
