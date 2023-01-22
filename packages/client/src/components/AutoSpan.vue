<script setup lang="ts">
defineProps<{
  text: string[]
}>()
</script>

<template>
  <div class="d-flex flex-column">
    <div
      class="d-flex flex-column ASRow"
      v-for="(s, i) in text"
      :key="`S-${i}`"
    >
      <span class="Info" v-for="(ss, j) in s.split('\n')" :key="`SS-${i}-${j}`">
        {{ ss }}
      </span>
    </div>
  </div>
</template>

<style>
.ASRow {
  margin-bottom: 2px;
}
@media (max-height: 599px) {
  .ASRow {
    margin-bottom: 0px;
  }
}
.ASRow:last-child {
  margin-bottom: 0px;
}
</style>
