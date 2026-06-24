<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SectionHeading from '../components/SectionHeading.vue'
import ProjectCard from '../components/ProjectCard.vue'
import BlogPreview from '../components/BlogPreview.vue'

/* ====== Scroll reveal ====== */
const revealRefs = ref<HTMLElement[]>([])

function onScroll() {
  revealRefs.value.forEach(el => {
    const top = el.getBoundingClientRect().top
    if (top < window.innerHeight * 0.85) {
      el.classList.add('visible')
    }
  })
}

onMounted(() => {
  revealRefs.value = [...document.querySelectorAll('.reveal')] as HTMLElement[]
  onScroll()
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

/* ====== Typed text ====== */
const typedTexts = ['AI 前端工程师', 'Vue / React / Flutter', 'AI Native 实践者', '终身学习者 🚀']
const currentText = ref('')
const textIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)
let timer: number

function type() {
  const full = typedTexts[textIndex.value]
  if (isDeleting.value) {
    currentText.value = full.substring(0, charIndex.value - 1)
    charIndex.value--
  } else {
    currentText.value = full.substring(0, charIndex.value + 1)
    charIndex.value++
  }

  if (!isDeleting.value && charIndex.value === full.length) {
    timer = window.setTimeout(() => { isDeleting.value = true; type() }, 2000)
    return
  }
  if (isDeleting.value && charIndex.value === 0) {
    isDeleting.value = false
    textIndex.value = (textIndex.value + 1) % typedTexts.length
  }
  timer = window.setTimeout(type, isDeleting.value ? 50 : 100)
}

onMounted(() => { type() })
onUnmounted(() => clearTimeout(timer))

/* ====== Skill tags ====== */
const skills = [
  { name: 'JavaScript / TS', color: '#F7DF1E' },
  { name: 'Vue 3', color: '#4FC08D' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Flutter', color: '#02569B' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Ant Design', color: '#0170FE' },
  { name: 'ECharts', color: '#AA344D' },
  { name: 'PixiJS', color: '#E72263' },
  { name: 'Pinia / Zustand', color: '#FFD859' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Claude Code', color: '#D97706' },
  { name: 'Cursor', color: '#fff' },
  { name: 'MCP / Skills', color: '#4285F4' },
  { name: 'Git', color: '#F05032' },
  { name: 'GSAP', color: '#88CE02' },
  { name: 'D3.js', color: '#F9A03C' },
]

const projects = [
  {
    title: '霸王茶姬 App & H5',
    subtitle: '下单 · 支付 · 优惠券 · 游戏化运营',
    desc: 'Flutter + React 双端，独立负责礼品卡/券包/结算/支付等核心模块，AI Coding 深度融入开发流程。',
    tags: ['Flutter', 'React', 'BLoC', 'PixiJS'],
    gradient: 'from-violet-600 to-purple-900',
  },
  {
    title: '理想汽车 · 阵地系统',
    subtitle: '线下建设数字化管理平台',
    desc: '主导前端架构与工程化建设，沉淀 50+ 业务组件，推动 AI Coding 落地，约 30% 开发由 AI 辅助。',
    tags: ['Vue 3', 'TypeScript', 'Ant Design Vue', 'Pinia'],
    gradient: 'from-blue-600 to-indigo-900',
  },
  {
    title: '鄂尔多斯 · 渠道管理',
    subtitle: '配置化页面体系 + 企业 UI 组件库',
    desc: 'Schema 驱动页面渲染，开发效率 ↑60%，沉淀 40+ 跨项目复用组件，PC + 企业微信双端。',
    tags: ['React', 'TypeScript', 'Ant Design', 'Redux'],
    gradient: 'from-emerald-600 to-teal-900',
  },
  {
    title: '罕见病 AI 诊断平台',
    subtitle: 'LLM + RAG + 知识图谱',
    desc: 'Vue 3 构建可扩展 AI 应用架构，集成流式输出、知识图谱可视化、医疗知识库检索增强。',
    tags: ['Vue 3', 'D3.js', 'SSE', 'Naive UI'],
    gradient: 'from-rose-600 to-pink-900',
  },
]

const blogPosts = [
  { title: '如何用 Claude Code + MCP 搭建你的 AI 开发工作流', date: '2026-06-20', tag: 'AI Coding' },
  { title: 'Vue 3 组合式 API 实战：从 Mixins 到 Composables', date: '2026-06-10', tag: 'Vue' },
  { title: 'Flutter 入门踩坑记：一个前端视角的跨端实践', date: '2026-05-28', tag: 'Flutter' },
]
</script>

<template>
  <main>
    <!-- ═══════════ HERO ═══════════ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background effects -->
      <div class="absolute inset-0 bg-grid" />
      <div class="glow-orb w-[600px] h-[600px] bg-violet-600 -top-40 -right-40" />
      <div class="glow-orb w-[500px] h-[500px] bg-indigo-600 -bottom-20 -left-20" />
      <div class="glow-orb w-[300px] h-[300px] bg-pink-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div class="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8 animate-fade-in">
          <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span class="text-text-dim">目前在积极看机会</span>
          <span class="text-accent-light font-medium">Open to Work</span>
        </div>

        <!-- Name -->
        <h1 class="text-5xl md:text-7xl font-black mb-4 tracking-tight animate-fade-in" style="animation-delay: 0.15s">
          Hi, I'm
          <span class="gradient-text">张瑞</span>
        </h1>

        <!-- Typed text -->
        <p class="text-xl md:text-2xl text-text-dim mb-8 h-8 animate-fade-in" style="animation-delay: 0.3s">
          <span>{{ currentText }}</span><span class="cursor" />
        </p>

        <!-- CTA buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style="animation-delay: 0.45s">
          <a
            href="#contact"
            class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-lg shadow-indigo-500/25 animate-pulse-glow"
          >
            🤝 联系我
          </a>
          <a
            href="/blog"
            class="px-8 py-3 rounded-full glass text-text-bright font-medium hover:border-accent/50 transition-all duration-300"
          >
            📝 读我的分享
          </a>
        </div>

        <!-- Scroll hint -->
        <div class="mt-16 animate-float">
          <span class="text-text-dim text-sm">向下滚动</span>
          <div class="mt-2 text-accent">↓</div>
        </div>
      </div>
    </section>

    <!-- ═══════════ ABOUT ═══════════ -->
    <section id="about" class="relative py-32 px-6">
      <SectionHeading emoji="🧠" title="关于我" />

      <div class="max-w-3xl mx-auto mt-16 space-y-6">
        <div
          v-for="(p, i) in [
            '一个把 AI 写进日常开发流程的前端工程师。8 年实打实的项目经验，从 0 到 1 搭过架构，也填过前人留下的坑。',
            '长期深度使用 Claude Code、Cursor、MCP，AI 已经融入需求分析、架构设计、代码生成、重构到测试的全流程。不只自己用，还在团队里推广，帮大家一起提效。',
            '写过 Vue、React、Flutter，搞过企业级架构、组件库建设、配置化页面体系。PC、H5、小程序、App 都碰过，跨端踩坑经验丰富。',
            '相信好的工程师不只写代码，更写「可维护的系统」。热爱琢磨工程化——规范怎么定、流程怎么优化、团队怎么协作更丝滑。'
          ]"
          :key="i"
          class="reveal flex gap-4"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <div class="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
          <p class="text-text-dim text-lg leading-relaxed">{{ p }}</p>
        </div>
      </div>
    </section>

    <!-- ═══════════ SKILLS ═══════════ -->
    <section id="skills" class="relative py-32 px-6">
      <SectionHeading emoji="🛠" title="技能工具箱" />

      <div class="max-w-4xl mx-auto mt-16 flex flex-wrap justify-center gap-3">
        <span
          v-for="skill in skills"
          :key="skill.name"
          class="skill-tag reveal px-4 py-2 rounded-full text-sm font-medium border cursor-default"
          :style="{
            color: skill.color,
            borderColor: skill.color + '33',
            backgroundColor: skill.color + '0d',
          }"
        >
          {{ skill.name }}
        </span>
      </div>
    </section>

    <!-- ═══════════ PROJECTS ═══════════ -->
    <section id="projects" class="relative py-32 px-6">
      <SectionHeading emoji="🚀" title="做过的事" />

      <div class="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
        <div
          v-for="(p, i) in projects"
          :key="p.title"
          class="reveal"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        >
          <ProjectCard v-bind="p" />
        </div>
      </div>
    </section>

    <!-- ═══════════ BLOG PREVIEW ═══════════ -->
    <section id="blog" class="relative py-32 px-6">
      <SectionHeading emoji="📝" title="技能分享" />

      <div class="max-w-3xl mx-auto mt-16 space-y-4">
        <BlogPreview
          v-for="(post, i) in blogPosts"
          :key="post.title"
          v-bind="post"
          :style="{ transitionDelay: `${i * 0.1}s` }"
        />
      </div>

      <div class="text-center mt-12 reveal">
        <a
          href="/blog"
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-text-bright font-medium hover:border-accent/50 transition-all duration-300"
        >
          查看全部文章
          <span class="text-accent-light">→</span>
        </a>
      </div>
    </section>

    <!-- ═══════════ CONTACT ═══════════ -->
    <section id="contact" class="relative py-32 px-6">
      <SectionHeading emoji="📬" title="找我聊聊" />

      <div class="max-w-2xl mx-auto mt-16 text-center">
        <p class="text-lg text-text-dim mb-4 reveal">
          如果你正在找一位 <span class="text-accent-light font-semibold">AI 前端方向</span> 的伙伴——
        </p>
        <p class="text-lg text-text-dim mb-10 reveal">
          或者只是想 <span class="text-text-bright">交流技术、聊聊 AI Coding</span>，都欢迎联系我。
        </p>

        <div class="reveal">
          <a
            href="mailto:447256217zhangrui@gmail.com"
            class="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-lg font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 shadow-xl shadow-indigo-500/30"
          >
            <span class="text-2xl">✉️</span>
            给我发邮件
          </a>
        </div>

        <p class="mt-10 text-sm text-text-dim reveal">
          📍 南京 · 也看远程机会
        </p>
      </div>
    </section>

  </main>
</template>

<style scoped>
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.12;
  pointer-events: none;
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.cursor::after {
  content: '|';
  animation: blink 1s step-end infinite;
  color: #6366f1;
}
@keyframes blink {
  50% { opacity: 0; }
}
</style>
