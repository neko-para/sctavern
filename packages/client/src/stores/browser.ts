import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBrowserStore = defineStore('browser', () => {
  const isMobile = ref(false)

  const checkPad = ref(false)

  const isPad = computed(() => {
    return isMobile.value && checkPad.value
  })

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
    const ms = matchMedia(`
(orientation: landscape) and (min-height: 900px) and (min-width: 1900px),
(orientation: portrait) and (min-width: 900px) and (min-height: 1900px)`)
    isMobile.value = !ms.matches
    ms.addEventListener('change', () => {
      isMobile.value = !ms.matches
    })

    const ms2 = matchMedia(`
(orientation: landscape) and (min-height: 500px) and (min-width: 1000px),
(orientation: portrait) and (min-width: 500px) and (min-height: 1000px)`)
    checkPad.value = ms2.matches
    ms2.addEventListener('change', () => {
      checkPad.value = ms2.matches
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
    isPad,
    isPortrait,
    isFullScreen,
    toggleFullScreen,
    init,
  }
})
