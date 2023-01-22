import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBrowserStore = defineStore('browser', () => {
  const isMobile = ref(false)

  function setMobile(im: boolean) {
    isMobile.value = im
  }

  const isFullScreen = ref(false)

  function toggleFullScreen() {
    if (isFullScreen.value) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  }

  function init() {
    const mm = matchMedia('(max-height: 599px)')
    setMobile(mm.matches)
    mm.addEventListener('change', () => {
      setMobile(mm.matches)
    })

    isFullScreen.value = !!document.fullscreenElement
    document.addEventListener('fullscreenchange', () => {
      isFullScreen.value = !!document.fullscreenElement
    })
  }

  return { isMobile, setMobile, isFullScreen, toggleFullScreen, init }
})
