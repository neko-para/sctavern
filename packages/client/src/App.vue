<script setup lang="ts">
import { Init } from '@sctavern/emulator'
import { useBrowserStore } from './stores/browser'

const browserStore = useBrowserStore()

Init()
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

<style>
.PortraitRotate {
  transform: rotate(90deg);
}
</style>
