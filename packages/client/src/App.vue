<script setup lang="ts">
import { Init } from '@sctavern/emulator'

Init()
</script>

<template>
  <v-app id="root">
    <div class="FullScreen">
      <router-view />
    </div>
  </v-app>
  <v-app id="warn" class="h-100">
    <v-card class="my-auto mx-2 elevation-24">
      <v-card-title>警告</v-card-title>
      <v-card-text>为了您的体验, 请横屏使用!</v-card-text>
    </v-card>
  </v-app>
</template>

<style>
#warn {
  display: none;
}

@media (max-width: 600px) and (orientation: portrait) {
  #root {
    display: none;
  }
  #warn {
    display: block;
  }
}
</style>
