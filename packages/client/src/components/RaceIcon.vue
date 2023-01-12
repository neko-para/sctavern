<script setup lang="ts">
import { racepng } from '@/assets/racePng'
import type { Race } from '@sctavern/data'

defineProps<{
  race: Race
}>()
</script>

<template>
  <div class="raceIconRoot align-center justify-center">
    <img :src="racepng[race]" />
  </div>
</template>

<style>
.raceIconRoot {
  width: 36px;
  height: 36px;
  display: flex;
}

@media (max-height: 599px) {
  .raceIconRoot {
    width: 18px;
    height: 18px;
  }
  .raceIconRoot > img {
    width: 18px;
    height: 18px;
    object-fit: scale-down;
  }
}
</style>
