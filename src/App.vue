<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navLinks = [
  { href: '/#about', label: '关于' },
  { href: '/#skills', label: '技能' },
  { href: '/#projects', label: '项目' },
  { href: '/#blog', label: '分享' },
  { href: '/#contact', label: '联系' },
]
</script>

<template>
  <div class="min-h-screen bg-surface">
    <!-- Nav -->
    <nav
      class="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      :class="scrolled ? 'glass border-b border-white/5' : 'bg-transparent'"
    >
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="text-xl font-black tracking-tight">
          <span class="gradient-text">Rui</span>
          <span class="text-text-bright">.Zhang</span>
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="link in navLinks" :key="link.href" :href="link.href"
            class="text-sm text-text-dim hover:text-text-bright transition-colors duration-300"
          >
            {{ link.label }}
          </a>
          <a
            href="/blog"
            class="text-sm px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent-light hover:bg-accent/20 transition-all duration-300"
          >
            📝 博客
          </a>
        </div>

        <!-- Mobile toggle -->
        <button
          class="md:hidden text-text-bright text-2xl"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          {{ mobileMenuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4"
      >
        <a
          v-for="link in navLinks" :key="link.href" :href="link.href"
          class="text-text-dim hover:text-text-bright transition-colors"
          @click="mobileMenuOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="/blog"
          class="text-accent-light"
          @click="mobileMenuOpen = false"
        >
          📝 博客
        </a>
      </div>
    </nav>

    <!-- Page content -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- Footer -->
    <footer class="border-t border-white/5 py-10 text-center">
      <p class="text-text-dim text-sm">
        © {{ new Date().getFullYear() }} Rui Zhang · Built with Vue 3 + Vite + 💜
      </p>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from { opacity: 0; transform: translateY(12px); }
.page-leave-to { opacity: 0; transform: translateY(-12px); }
</style>
