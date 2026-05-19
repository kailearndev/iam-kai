<script setup lang="ts">
defineProps<{
    heroRef?: HTMLElement | null
}>()
</script>

<template>
    <section id="hero" class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <p class="hero-badge">
                Ho Chi Minh City 🇻🇳
            </p>

            <h1 class="hero-title">
                Frontend Engineer
                evolving into Fullstack.
            </h1>

            <p class="hero-desc">
                Building scalable products,
                APIs and user experiences
                for global teams.
            </p>
        </div>
    </section>
</template>