import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBrowserStore = defineStore('browser', () => {
  const isMobile = ref(false)

  function setMobile(im: boolean) {
    isMobile.value = im
  }

  const isPortrait = ref(false)

  const isFullScreen = ref(false)

  function toggleFullScreen() {
    if (isFullScreen.value) {
      document.exitFullscreen()
    } else {
      document.body.requestFullscreen()
    }
  }

  function init() {
    const ms = matchMedia('(max-height: 899px) or (max-width: 1899px)')
    setMobile(ms.matches)
    ms.addEventListener('change', () => {
      setMobile(ms.matches)
    })

    const mo = matchMedia('(orientation: portrait)')
    isPortrait.value = mo.matches
    mo.addEventListener('change', () => {
      isPortrait.value = mo.matches
    })

    isFullScreen.value = !!document.fullscreenElement
    document.addEventListener('fullscreenchange', () => {
      isFullScreen.value = !!document.fullscreenElement
    })
  }

  return {
    isMobile,
    setMobile,
    isPortrait,
    isFullScreen,
    toggleFullScreen,
    init,
  }
})
