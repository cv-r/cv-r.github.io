<script setup lang="ts">
defineProps<{
  title: string
  date: string
  tag: string
}>()
</script>

<template>
  <div class="reveal glass rounded-xl p-5 flex items-center justify-between gap-4 cursor-pointer group">
    <div class="flex-1 min-w-0">
      <h3 class="text-text-bright font-semibold truncate group-hover:text-accent-light transition-colors">
        {{ title }}
      </h3>
      <p class="text-text-dim text-sm mt-1">{{ date }}</p>
    </div>
    <span class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 shrink-0">
      {{ tag }}
    </span>
    <span class="text-text-dim group-hover:text-accent-light group-hover:translate-x-1 transition-all duration-300 shrink-0">
      →
    </span>
  </div>
</template>
