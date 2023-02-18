<script setup lang="ts">
import { useBrowserStore } from '@/stores/browser'
const browserStore = useBrowserStore()

withDefaults(
  defineProps<{
    variant?: 'flat' | 'elevated' | 'tonal' | 'outlined' | 'text' | 'plain'
    accelerator?: string | null
  }>(),
  {
    variant: 'elevated',
    accelerator: null,
  }
)
</script>

<template>
  <v-btn :variant="variant" :size="browserStore.isMobile ? 'x-small' : 'large'">
    <span :_acc="accelerator ? `[${accelerator}]` : ''">
      <slot></slot>
    </span>
  </v-btn>
</template>

<style></style>
