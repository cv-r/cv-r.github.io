<script setup lang="ts">
import { computed } from 'vue'

interface Chapter {
  num: number
  title: string
  desc: string
  status: 'done' | 'writing' | 'soon'
}

const chapters: Chapter[] = [
  { num: 1,  title: '启程：React 仓库全景图',           desc: '从克隆 React 源码开始，理解 monorepo 结构、各包职责、以及从 JSX 到屏幕像素的完整链路。', status: 'done' },
  { num: 2,  title: 'JSX & createElement：语法糖背后',   desc: 'Babel 插件如何把 JSX 编译为 createElement 调用？Virtual DOM 的本质是什么数据结构？', status: 'done' },
  { num: 3,  title: 'Fiber 架构（上）：为什么需要 Fiber', desc: '同步渲染的卡顿问题 → 时间切片 → Fiber 节点的数据结构设计——理解 React 架构的演进动机。', status: 'done' },
  { num: 4,  title: 'Fiber 架构（下）：双缓冲与工作循环', desc: 'workLoop → beginWork → completeWork，双 Fiber 树（current & workInProgress）的协作方式。', status: 'writing' },
  { num: 5,  title: 'Reconciler：Diff 算法的底层实现',    desc: '单节点 Diff、多节点 Diff、key 的作用、DOM 复用策略——从原理到源码的完整对照。', status: 'done' },
  { num: 6,  title: 'Render 阶段：beginWork 与 completeWork', desc: '递的阶段（beginWork）和归的阶段（completeWork），EffectList 收集副作用的全过程。', status: 'writing' },
  { num: 7,  title: 'Commit 阶段：把变化写入真实 DOM',     desc: 'mutation 前中后三个子阶段——beforeMutation、mutation、layout，以及 useLayoutEffect 的执行时机。', status: 'soon' },
  { num: 8,  title: 'Hooks 原理（上）：useState & useReducer', desc: '链表存储、不可变更新、批量更新、dispatch 的实现——从源码看 Hooks 的设计精髓。', status: 'writing' },
  { num: 9,  title: 'Hooks 原理（下）：useEffect & useMemo', desc: '依赖数组比较算法、Effect 的执行与清理时机、useCallback 和 useMemo 的优化原理。', status: 'soon' },
  { num: 10, title: 'Scheduler：优先级调度与时间切片',     desc: 'lane 模型、任务优先级、过期时间、中断与恢复——React 如何做到「不阻塞用户的快速响应」。', status: 'soon' },
  { num: 11, title: '事件系统：合成事件与事件委托',          desc: 'React 为什么要有自己的事件系统？插件机制、dispatch 流程、与浏览器原生事件的关系。', status: 'soon' },
  { num: 12, title: 'Concurrent 模式：并发渲染的未来',      desc: 'Suspense、startTransition、useDeferredValue——并发特性背后的架构支撑。', status: 'soon' },
  { num: 13, title: '状态管理生态：Zustand & Jotai 源码简析', desc: '对比分析主流轻量状态库的源码设计，理解不可变数据、原子化、订阅模式的区别。', status: 'soon' },
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
        <div class="glow-orb-local w-[300px] h-[300px] bg-sky-500 -top-20 -right-20" />
        <div class="glow-orb-local w-[200px] h-[200px] bg-blue-600 bottom-0 left-1/2" />

        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-medium mb-6">
            📚 系列教程
          </div>
          <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">
            <span class="react-gradient">React 源码</span>
          </h1>
          <p class="text-xl text-text-bright font-medium mb-2">从 0 到 1，逐行读懂 React 核心源码</p>
          <p class="text-text-dim max-w-xl leading-relaxed">
            从 JSX 到 Fiber，从 Hooks 到 Concurrent——这是写给前端工程师的 React 源码深度指南。
            每一章都始于「这个设计解决什么问题」，终于「手写一个 mini 版验证理解」。
          </p>
        </div>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-4 gap-4 mb-14">
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black react-gradient inline-block" style="-webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">{{ stats.total }}</div>
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
              'bg-sky-500/20 text-sky-300 border border-sky-500/40': ch.status === 'done',
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
.react-gradient {
  background: linear-gradient(135deg, #61DAFB, #38bdf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.chapter-card:hover {
  border-color: rgba(97, 218, 251, 0.3);
  transform: translateX(4px);
}
</style>
