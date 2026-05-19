<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const navRef = ref<HTMLElement | null>(null)

onMounted(() => {
    if (navRef.value) {
        const ctx = gsap.context(() => {
            gsap.to(navRef.value, {
                backgroundColor: 'rgba(7, 8, 22, 0.8)',
                backdropFilter: 'blur(10px)',
                scrollTrigger: {
                    trigger: navRef.value,
                    start: 'top top',
                    end: '+=200',
                    scrub: true,
                },
            })
        })

        onUnmounted(() => ctx.revert())
    }
})

</script>

<template>
    <header ref="navRef"
        class="relative z-20 mx-auto flex max-w-7xl items-center scroll-smooth justify-between px-6 py-6">
        <a href="#" class="text-xl font-black tracking-tight">
            Kai<span class="text-cyan-300">"{dev}"</span>
        </a>

        <nav class="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#features" class="transition hover:text-white">
                Skills
            </a>
            <a href="#showcase" class="transition hover:text-white">
                Projects
            </a>
            <a href="#pricing" class="transition hover:text-white">
                Education
            </a>
            <a href="#contact" class="transition hover:text-white">
                Contact
            </a>
        </nav>

        <button
            class="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20">
            Get Started
        </button>
    </header>
</template>
