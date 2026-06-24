<script setup lang="ts">
import { computed } from 'vue'

interface Chapter {
  num: number
  title: string
  desc: string
  status: 'done' | 'writing' | 'soon'
}

const chapters: Chapter[] = [
  { num: 1,  title: '认知觉醒：什么是 AI Native 开发',        desc: '从「AI 辅助写代码」到「AI 驱动开发」的思维转变，理解 AI Native 工程师的核心竞争力。', status: 'done' },
  { num: 2,  title: '工欲善其事：Claude Code 从安装到精通',    desc: '环境配置、CLI 基本用法、项目级配置 CLAUDE.md、Hooks 系统，把 Claude Code 变成你的第二大脑。', status: 'done' },
  { num: 3,  title: 'Cursor 完全指南：AI IDE 的正确打开方式',  desc: 'Tab 补全、内联对话、Composer、Rules for AI、上下文管理，让你的 IDE 会思考。', status: 'done' },
  { num: 4,  title: 'MCP 协议：连接 AI 与万物的桥梁',           desc: '理解 Model Context Protocol 的设计哲学，手写一个 MCP Server，接入外部工具和数据源。', status: 'writing' },
  { num: 5,  title: 'Prompt 工程实战：好问题胜过好答案',        desc: '角色设定、分步指令、示例驱动、链式思考——写出让 AI 一次就懂你的 Prompt。', status: 'done' },
  { num: 6,  title: 'Skills & Slash Commands：封装你的 AI 技能', desc: '把高频操作封装成可复用的 Skill，搭建属于自己的 AI 快捷键体系。', status: 'writing' },
  { num: 7,  title: 'AI Agent 编排：多智能体协作工作流',         desc: '从单 Agent 到多 Agent 协同——Workflow、Pipeline、Loop-until-dry 模式实战。', status: 'soon' },
  { num: 8,  title: 'AI 辅助架构设计：从需求到方案',              desc: '用 AI 做技术选型、系统设计评审、风险识别，让架构决策有据可依。', status: 'soon' },
  { num: 9,  title: 'AI + TDD：先写测试再让 AI 实现',            desc: '测试驱动 + AI 生成的结合：Red-Green-Refactor 循环在 AI 时代的新玩法。', status: 'soon' },
  { num: 10, title: 'AI Coding 全流程实战：一个项目看全貌',       desc: '从需求分析 → 代码生成 → 重构 → 测试 → 部署，完整走一遍 AI Native 项目。', status: 'soon' },
  { num: 11, title: '团队推广指南：让 AI 成为团队基础设施',        desc: '如何说服团队、制定 AI Coding 规范、Code Review 策略、效率度量与持续优化。', status: 'soon' },
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
      <!-- Back -->
      <a href="/blog" class="inline-flex items-center gap-2 text-text-dim hover:text-accent-light transition-colors mb-8 text-sm">
        <span>←</span> 返回博客
      </a>

      <!-- Hero -->
      <div class="relative overflow-hidden rounded-3xl glass p-10 md:p-14 mb-14">
        <div class="glow-orb-local w-[300px] h-[300px] bg-violet-600 -top-20 -right-20" />
        <div class="glow-orb-local w-[200px] h-[200px] bg-indigo-500 bottom-0 left-1/2" />

        <div class="relative z-10">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-medium mb-6">
            📚 系列教程
          </div>
          <h1 class="text-3xl md:text-5xl font-black tracking-tight mb-4">
            <span class="gradient-text">AI 学习路径</span>
          </h1>
          <p class="text-xl text-text-bright font-medium mb-2">从 0 到 1，成为 AI Native 工程师</p>
          <p class="text-text-dim max-w-xl leading-relaxed">
            这不是「AI 工具使用手册」，而是一条系统化的 AI 开发能力进阶之路。
            从认知、工具链、Prompt 工程到多 Agent 协作，每一步都是我在真实项目中验证过的经验。
          </p>
        </div>
      </div>

      <!-- Stats bar -->
      <div class="grid grid-cols-4 gap-4 mb-14">
        <div class="glass rounded-xl p-4 text-center">
          <div class="text-2xl font-black gradient-text">{{ stats.total }}</div>
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

      <!-- Chapter list -->
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
          <!-- Chapter number circle -->
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
            :class="{
              'bg-violet-500/20 text-violet-300 border border-violet-500/40': ch.status === 'done',
              'bg-amber-500/20 text-amber-300 border border-amber-500/40': ch.status === 'writing',
              'bg-white/5 text-text-dim border border-white/10': ch.status === 'soon',
            }"
          >
            {{ ch.num }}
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 flex-wrap mb-1">
              <h3
                class="font-semibold"
                :class="{
                  'text-text-bright': ch.status === 'done' || ch.status === 'writing',
                  'text-text-dim': ch.status === 'soon',
                }"
              >
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
.chapter-card:hover {
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateX(4px);
}
</style>
