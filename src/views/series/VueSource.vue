<script setup lang="ts">
import { computed } from 'vue'

interface Chapter {
  num: number
  title: string
  desc: string
  status: 'done' | 'writing' | 'soon'
}

const chapters: Chapter[] = [
  { num: 1,  title: '起航：源码目录结构与设计哲学',      desc: '从克隆 Vue 3 仓库开始，理解 monorepo 结构、核心包职责、以及 Vue 的整体架构设计思路。', status: 'done' },
  { num: 2,  title: '响应式系统（上）：reactive 的实现',  desc: '深入 Proxy 劫持、依赖收集 track、触发更新 trigger，手写一个简易响应式系统。', status: 'done' },
  { num: 3,  title: '响应式系统（下）：ref、computed、watch', desc: 'ref 的值封装、computed 的惰性求值、watch 的多种重载——响应式 API 全家桶原理剖析。', status: 'writing' },
  { num: 4,  title: '虚拟 DOM：从 h 函数到 VNode 树',     desc: 'createVNode 的核心实现、VNode 的类型系统、PatchFlag 静态标记与靶向更新。', status: 'done' },
  { num: 5,  title: '渲染器（上）：mount 挂载流程',       desc: 'createRenderer → patch → mountElement，一步一步走完组件的首次渲染全流程。', status: 'writing' },
  { num: 6,  title: '渲染器（下）：update 更新与 Diff 算法', desc: '双端对比、最长递增子序列、key 的作用——从源码看 Diff 为什么这么快。', status: 'writing' },
  { num: 7,  title: '组件系统：组件的挂载、更新与卸载',     desc: 'createComponentInstance → setupComponent → setupRenderEffect，组件生命周期本质。', status: 'soon' },
  { num: 8,  title: '编译器（上）：Template 到 AST',       desc: '词法分析与语法分析——parse 阶段如何把 template 字符串变成抽象语法树。', status: 'soon' },
  { num: 9,  title: '编译器（下）：AST 到 Render 函数',    desc: 'transform 转换阶段 + generate 代码生成——编译器三部曲完整串联。', status: 'soon' },
  { num: 10, title: '调度器：nextTick 与异步更新队列',      desc: '任务调度、微任务 vs 宏任务、更新队列的批量处理，理解 Vue 的异步更新机制。', status: 'soon' },
  { num: 11, title: '内置组件：KeepAlive、Teleport、Suspense', desc: '三个特殊组件的底层实现——缓存策略、传送门原理、异步屏障。', status: 'soon' },
  { num: 12, title: 'TypeScript 类型体操：Vue 3 的类型系统', desc: '泛型推导、条件类型、重载签名——Vue 3 如何用 TS 提供一流的类型支持。', status: 'soon' },
]

const stats = computed(() => ({
  done: chapters.filter(c => c.status === 'done').length,
  writing: chapters.filter(c => c.status === 'writing').length,
  soon: chapters.filter(c => c.status === 'soon').length,
  total: chapters.length,
}))

const statusLabel: Record<string, string> = {
  done: '✅ 已完成',
  writing: '✍️ 撰写中',
  soon: '📅 计划中',
}
</script>

<template>
  <main class="pt-32 pb-20 px-6">
    <div class="max-w-4xl mx-auto">
      <a href="/blog" class="inline-flex items-center gap-2 text-text-dim hover:text-accent-light transition-colors mb-8 text-sm">
        <span>←</span> 返回博客
      </a>

      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl glass p-10 md:p-14 mb-14">
        <div class="glow-orb-local w-[300px] h-[300px] bg-emerald-500 -top-20 -right-20" />
        <div class="glow-orb-local w-[200px] h-[200px] bg-teal-500 bottom-0 left-1/2" />

        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium mb-6">
            📚 系列教程
          </div>
          <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">
            <span class="vue-gradient">Vue 3 源码</span>
          </h1>
          <p class="text-xl text-text-bright font-medium mb-2">从 0 到 1，逐行读懂 Vue 3 核心源码</p>
          <p class="text-text-dim max-w-xl leading-relaxed">
            不同于「源码解析」文章——这是一份循序渐进的手把手源码阅读指南。
            每章聚焦一个问题，从原理 → 手写 mini 版 → 对照源码，让你真正「知其所以然」。
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-4 mb-14">
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black vue-gradient inline-block" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{{ stats.total }}</div>
          <div class="text-xs text-text-dim mt-1">章节总数</div>
        </div>
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black text-green-400">{{ stats.done }}</div>
          <div class="text-xs text-text-dim mt-1">已完成</div>
        </div>
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black text-amber-400">{{ stats.writing }}</div>
          <div class="text-xs text-text-dim mt-1">撰写中</div>
        </div>
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black text-text-dim">{{ stats.soon }}</div>
          <div class="text-xs text-text-dim mt-1">计划中</div>
        </div>
      </div>

      <!-- Chapters -->
      <h2 class="text-xl font-bold text-text-bright mb-6">📖 章节目录</h2>
      <div class="space-y-3">
        <div
          v-for="ch in chapters"
          :key="ch.num"
          class="chapter-card glass rounded-xl p-5 flex items-start gap-5 transition-all duration-300"
          :class="{
            'opacity-90 hover:opacity-100': ch.status === 'done',
            'opacity-70': ch.status === 'soon',
          }"
        >
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
            :class="{
              'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40': ch.status === 'done',
              'bg-amber-500/20 text-amber-300 border border-amber-500/40': ch.status === 'writing',
              'bg-white/5 text-text-dim border border-white/10': ch.status === 'soon',
            }"
          >
            {{ ch.num }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 flex-wrap mb-1">
              <h3 :class="(ch.status === 'done' || ch.status === 'writing') ? 'text-text-bright font-semibold' : 'text-text-dim font-semibold'">
                {{ ch.title }}
              </h3>
              <span
                class="text-xs px-2 py-0.5 rounded-full shrink-0"
                :class="{
                  'bg-green-500/10 text-green-400 border border-green-500/30': ch.status === 'done',
                  'bg-amber-500/10 text-amber-400 border border-amber-500/30': ch.status === 'writing',
                  'bg-white/5 text-text-dim border border-white/10': ch.status === 'soon',
                }"
              >
                {{ statusLabel[ch.status] }}
              </span>
            </div>
            <p class="text-text-dim text-sm leading-relaxed">{{ ch.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.glow-orb-local {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.1;
  pointer-events: none;
}
.vue-gradient {
  background: linear-gradient(135deg, #4FC08D, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.chapter-card:hover {
  border-color: rgba(79, 192, 141, 0.3);
  transform: translateX(4px);
}
</style>
