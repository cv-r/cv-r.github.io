<script setup lang="ts">
const posts = [
  {
    title: '如何用 Claude Code + MCP 搭建你的 AI 开发工作流',
    date: '2026-06-20',
    tag: 'AI Coding',
    excerpt: '分享我深度使用 Claude Code 半年多来沉淀的 Skills 编排、MCP 接入和高效 Prompt 编写经验。'
  },
  {
    title: 'Vue 3 组合式 API 实战：从 Mixins 到 Composables',
    date: '2026-06-10',
    tag: 'Vue',
    excerpt: '聊聊 Vue 3 Composition API 在企业级项目中的实际应用，以及如何优雅地组织可复用逻辑。'
  },
  {
    title: 'Flutter 入门踩坑记：一个前端视角的跨端实践',
    date: '2026-05-28',
    tag: 'Flutter',
    excerpt: '从零开始学 Flutter 的真实经历：Dart 语言特性、BLoC 状态管理、以及与 AI Coding 配合的高效学习路径。'
  },
  {
    title: '前端工程化实践：从混乱到有序的组件库建设之路',
    date: '2026-05-15',
    tag: '工程化',
    excerpt: '如何从 0 到 1 建设企业级组件库：设计规范、开发流程、文档体系、以及踩过的那些坑。'
  },
  {
    title: 'AI Native 开发不是口号——我在实际项目中怎么用 AI',
    date: '2026-04-22',
    tag: 'AI Coding',
    excerpt: '不聊概念聊实战：在霸王茶姬、理想汽车等项目中，AI 到底帮我干了哪些活、提效了多少。'
  },
]

const tags = [...new Set(posts.map(p => p.tag))]
const activeTag = ref('全部')

import { ref, computed } from 'vue'
const filtered = computed(() =>
  activeTag.value === '全部' ? posts : posts.filter(p => p.tag === activeTag.value)
)
</script>

<template>
  <main class="pt-32 pb-20 px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-4xl">📝</span>
        <h1 class="mt-4 text-4xl font-black tracking-tight gradient-text">技能分享</h1>
        <p class="mt-4 text-text-dim">前端 · AI Coding · 工程化 · 踩坑记录</p>
      </div>

      <!-- Filter tags -->
      <div class="flex flex-wrap justify-center gap-2 mb-12">
        <button
          v-for="t in ['全部', ...tags]" :key="t"
          @click="activeTag = t"
          class="px-4 py-1.5 text-sm rounded-full border transition-all duration-300"
          :class="activeTag === t
            ? 'bg-accent/20 border-accent/40 text-accent-light'
            : 'border-white/10 text-text-dim hover:border-white/30'"
        >
          {{ t }}
        </button>
      </div>

      <!-- Posts -->
      <div class="space-y-4">
        <a
          v-for="post in filtered" :key="post.title"
          href="#"
          class="block glass rounded-xl p-6 group hover:border-accent/40 transition-all duration-300"
        >
          <div class="flex items-start justify-between gap-4 mb-2">
            <h2 class="text-lg font-bold text-text-bright group-hover:text-accent-light transition-colors">
              {{ post.title }}
            </h2>
            <span class="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 shrink-0">
              {{ post.tag }}
            </span>
          </div>
          <p class="text-text-dim text-sm leading-relaxed mb-3">{{ post.excerpt }}</p>
          <span class="text-text-dim text-xs">{{ post.date }}</span>
        </a>
      </div>

      <!-- Empty -->
      <p v-if="filtered.length === 0" class="text-center text-text-dim py-20">
        该分类下暂无文章，敬请期待~
      </p>
    </div>
  </main>
</template>
