<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  desc: string
  tags: string[]
  gradient: string
}>()
</script>

<template>
  <div class="project-card glass rounded-2xl p-6 h-full flex flex-col">
    <!-- Decorative gradient bar -->
    <div :class="['h-1.5 rounded-full mb-5 bg-gradient-to-r', gradient]" />

    <h3 class="text-xl font-bold text-text-bright mb-2">{{ title }}</h3>
    <p class="text-accent-light text-sm font-medium mb-3">{{ subtitle }}</p>
    <p class="text-text-dim text-sm leading-relaxed mb-5 flex-1">{{ desc }}</p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="t in tags" :key="t"
        class="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 text-text-dim border border-white/10"
      >
        {{ t }}
      </span>
    </div>
  </div>
</template>
