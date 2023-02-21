<script setup lang="ts">
import { Init } from '@sctavern/emulator'
import { watch } from 'vue'
import { useBrowserStore } from './stores/browser'

const browserStore = useBrowserStore()

Init()

// screen.orientation.lock('landscape')

watch(
  browserStore,
  () => {
    document.body.setAttribute(
      'class',
      [
        browserStore.isMobile ? 'Mobile' : '',
        browserStore.isPad ? 'Pad' : '',
        browserStore.isPortrait ? 'Portrait' : '',
      ].join(' ')
    )
    if (browserStore.isPortrait) {
      const offset =
        (browserStore.clientSize.height - browserStore.clientSize.width) / 2
      document.body.setAttribute(
        'style',
        `width: ${browserStore.clientSize.height}px; height: ${browserStore.clientSize.width}px; transform: rotate(90deg) translate(0, ${offset}px)`
      )
    } else {
      document.body.setAttribute('style', '')
    }
  },
  { deep: true }
)
</script>

<template>
  <v-app id="root">
    <div class="FullScreen">
      <div
        :class="{
          PortraitRotate: browserStore.isPortrait,
        }"
      >
        <router-view />
      </div>
    </div>
  </v-app>
</template>

<style></style>
