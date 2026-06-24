<script setup lang="ts">
defineProps<{ emoji: string; title: string }>()
</script>

<template>
  <div class="text-center reveal">
    <span class="text-4xl">{{ emoji }}</span>
    <h2 class="mt-4 text-3xl md:text-4xl font-black tracking-tight gradient-text">{{ title }}</h2>
  </div>
</template>
