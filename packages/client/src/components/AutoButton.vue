<script setup lang="ts">
import { useBrowserStore } from '@/stores/browser'
const mobile = useBrowserStore()

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
  <v-btn
    class="auto-button"
    :variant="variant"
    :size="mobile.isMobile ? 'x-small' : 'large'"
  >
    <span :_acc="accelerator ? `[${accelerator}]` : ''">
      <slot></slot>
    </span>
  </v-btn>
</template>

<style>
@media (min-height: 600px) {
  .auto-button > span ::after {
    /* content: attr(_acc); */
  }
}
</style>
