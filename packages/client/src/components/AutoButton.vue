<script setup lang="ts">
import { useMobileStore } from '@/stores/mobile'
const mobile = useMobileStore()

withDefaults(
  defineProps<{
    variant?: 'flat' | 'elevated' | 'tonal' | 'outlined' | 'text' | 'plain'
    accelerator: string | null
  }>(),
  {
    variant: 'elevated',
    accelerator: null,
  }
)
</script>

<template>
  <v-btn class="auto-button" :size="mobile.isMobile ? 'small' : 'default'">
    <span :_acc="accelerator ? `[${accelerator}]` : ''">
      <slot></slot>
    </span>
  </v-btn>
</template>

<style>
@media (min-height: 600px) {
  .auto-button > span ::after {
    content: attr(_acc);
  }
}
</style>
