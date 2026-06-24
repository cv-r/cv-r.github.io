<script setup lang="ts">
import { ref, computed } from 'vue'

/* ====== 系列教程 ====== */
const seriesList = [
  {
    title: 'AI 学习路径',
    subtitle: '从 0 到 1，成为 AI Native 工程师',
    desc: '从认知转变、工具链、Prompt 工程到多 Agent 编排——系统化的 AI 开发能力进阶之路。',
    route: '/series/ai-learn',
    gradient: 'from-violet-600 to-indigo-600',
    accent: 'violet' as const,
    stats: { total: 11, done: 4 },
    icon: '🤖',
  },
  {
    title: 'Vue 3 源码',
    subtitle: '从 0 到 1，逐行读懂核心源码',
    desc: '响应式系统 → 虚拟 DOM → Diff 算法 → 编译器——循序渐进的手把手源码阅读指南。',
    route: '/series/vue-source',
    gradient: 'from-emerald-600 to-teal-600',
    accent: 'emerald' as const,
    stats: { total: 12, done: 3 },
    icon: '📗',
  },
  {
    title: 'React 源码',
    subtitle: '从 0 到 1，深入 React 架构内核',
    desc: 'JSX → Fiber → Reconciler → Hooks → Scheduler——写给工程师的源码深度指南。',
    route: '/series/react-source',
    gradient: 'from-sky-600 to-blue-600',
    accent: 'sky' as const,
    stats: { total: 13, done: 4 },
    icon: '⚛️',
  },
]

/* ====== 单篇文章 ====== */
const posts = [
  {
    title: '前端工程化实践：从混乱到有序的组件库建设之路',
    date: '2026-05-15',
    tag: '工程化',
    excerpt: '如何从 0 到 1 建设企业级组件库：设计规范、开发流程、文档体系、以及踩过的那些坑。'
  },
  {
    title: 'Flutter 入门踩坑记：一个前端视角的跨端实践',
    date: '2026-05-28',
    tag: 'Flutter',
    excerpt: '从零开始学 Flutter 的真实经历：Dart 语言特性、BLoC 状态管理、以及与 AI Coding 配合的高效学习路径。'
  },
  {
    title: 'AI Native 开发不是口号——我在实际项目中怎么用 AI',
    date: '2026-04-22',
    tag: 'AI Coding',
    excerpt: '不聊概念聊实战：在霸王茶姬、理想汽车等项目中，AI 到底帮我干了哪些活、提效了多少。'
  },
]

const articleTags = [...new Set(posts.map(p => p.tag))]
const activeTag = ref('全部')
const filteredPosts = computed(() =>
  activeTag.value === '全部' ? posts : posts.filter(p => p.tag === activeTag.value)
)

</script>

<template>
  <main class="pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-4xl">📝</span>
        <h1 class="mt-4 text-4xl font-black tracking-tight gradient-text">技能分享</h1>
        <p class="mt-4 text-text-dim">系统化教程系列 · 源码解析 · 踩坑记录</p>
      </div>

      <!-- ═══════════ 系列教程 ═══════════ -->
      <h2 class="text-lg font-bold text-text-dim uppercase tracking-wider mb-6">📚 系列教程</h2>
      <div class="grid md:grid-cols-3 gap-5 mb-20">
        <a
          v-for="s in seriesList"
          :key="s.title"
          :href="s.route"
          class="series-card glass rounded-2xl p-6 group transition-all duration-500 relative overflow-hidden"
        >
          <!-- 顶部装饰条 -->
          <div :class="['h-1.5 rounded-full mb-5 bg-gradient-to-r', s.gradient]" />

          <!-- Icon -->
          <span class="text-3xl mb-4 block">{{ s.icon }}</span>

          <h3 class="text-lg font-bold text-text-bright mb-1 group-hover:text-accent-light transition-colors">
            {{ s.title }}
          </h3>
          <p class="text-xs text-accent-light font-medium mb-3">{{ s.subtitle }}</p>
          <p class="text-text-dim text-sm leading-relaxed mb-4 flex-1">{{ s.desc }}</p>

          <!-- Stats -->
          <div class="flex items-center gap-3 text-xs text-text-dim">
            <span>{{ s.stats.total }} 章</span>
            <span class="text-green-400">{{ s.stats.done }} 篇已完成</span>
          </div>

          <!-- Progress bar -->
          <div class="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
            <div
              :class="['h-full rounded-full bg-gradient-to-r', s.gradient, 'transition-all duration-700']"
              :style="{ width: `${(s.stats.done / s.stats.total) * 100}%` }"
            />
          </div>

          <!-- 底部箭头 -->
          <div class="mt-4 flex justify-end">
            <span class="text-text-dim group-hover:text-accent-light group-hover:translate-x-1 transition-all duration-300 text-sm">
              进入系列 →
            </span>
          </div>
        </a>
      </div>

      <!-- ═══════════ 单篇文章 ═══════════ -->
      <h2 class="text-lg font-bold text-text-dim uppercase tracking-wider mb-6">📄 随笔记</h2>

      <!-- Filter tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <button
          v-for="t in ['全部', ...articleTags]" :key="t"
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
      <div class="space-y-3">
        <a
          v-for="post in filteredPosts" :key="post.title"
          href="#"
          class="block glass rounded-xl p-5 group transition-all duration-300"
        >
          <div class="flex items-start justify-between gap-4 mb-2">
            <h3 class="text-base font-bold text-text-bright group-hover:text-accent-light transition-colors">
              {{ post.title }}
            </h3>
            <span class="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent-light border border-accent/20 shrink-0">
              {{ post.tag }}
            </span>
          </div>
          <p class="text-text-dim text-sm leading-relaxed mb-3">{{ post.excerpt }}</p>
          <span class="text-text-dim text-xs">{{ post.date }}</span>
        </a>
      </div>

      <p v-if="filteredPosts.length === 0" class="text-center text-text-dim py-20">
        该分类下暂无文章，敬请期待~
      </p>
    </div>
  </main>
</template>

<style scoped>
.series-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(99, 102, 241, 0.08);
}
</style>
