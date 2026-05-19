<script setup lang="ts">
import { useLandingAnimation } from '../composable/useLandingAnimation'

useLandingAnimation()

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#stack' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
]

const highlights = [
    '5+ Years Experience',
    'Japanese Market Experience',
    'Fullstack-Oriented',
    'Cloud & Deployment Experience',
]

const stackGroups = [
    {
        title: 'Frontend',
        items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'Redux', 'Zustand', 'TanStack Query'],
    },
    {
        title: 'Backend',
        items: ['Node.js', 'NestJS', 'Go', 'PostgreSQL', 'Supabase'],
    },
    {
        title: 'Cloud',
        items: ['AWS', 'Docker', 'Vercel'],
    },
]

const experiences = [
    {
        company: 'DYM Vietnam',
        period: '2025 - Present',
        role: 'Frontend Developer',
        summary: 'Building a medical recruitment platform with server-rendered product flows, SEO foundations, and production deployment workflows.',
        points: ['Medical Recruitment Platform', 'SEO Optimization', 'Server Components', 'Supabase', 'Vercel', 'AWS'],
    },
    {
        company: 'BrickMate Vietnam',
        period: '2023 - 2024',
        role: 'Frontend Developer',
        summary: 'Delivered enterprise dashboard features for authenticated teams with maintainable state, data fetching, and UI systems.',
        points: ['Enterprise Dashboard', 'Redux', 'React Query', 'Material UI', 'JWT Authentication'],
    },
    {
        company: 'SCB Bank',
        period: '2021 - 2022',
        role: 'Frontend Developer',
        summary: 'Worked on banking workflows where reliability, clear data presentation, and security-aware implementation were critical.',
        points: ['Loan Origination System', 'CRM Features', 'Banking Security Standards', 'Data Visualization'],
    },
]

const projects = [
    {
        title: 'Recruitment Platform API',
        meta: 'Node.js / NestJS / PostgreSQL',
        description: 'Authentication, authorization, job posting, application workflow, JWT access control, and RBAC foundations.',
        url: '',
    },
    {
        title: 'Medical Recruitment Platform',
        meta: 'Next.js / TypeScript / Supabase',
        description: 'SEO-focused medical recruitment screens with server components, structured content, and performance optimization.',
        url: '',
    },
    {
        title: 'Enterprise Dashboard',
        meta: 'React / Redux / React Query',
        description: 'Data management, user administration, dashboard analytics, and Material UI modules for internal operations.',
        url: '',
    },
    {
        title: 'Kaigo Search Plus',
        meta: 'Japanese Media Platform',
        description: 'Caregiving information media with columns, certification content, news, SNS touchpoints, and inquiry flows for the Japanese market.',
        url: 'https://kaigosearch-plus.jp/',
    },
    {
        title: 'Prezem',
        meta: 'Korean Event Platform',
        description: 'Real-time popup store, exhibition, festival, ranking, review, map search, and reservation-oriented discovery experience.',
        url: 'https://prezem.site/',
    },
    {
        title: "1995's Home",
        meta: 'Interior Commerce Website',
        description: 'Vietnamese furniture and interior website with product categories, completed project showcases, customer reviews, and contact channels.',
        url: 'https://1995shome.vn/',
    },
    {
        title: 'QN Creative',
        meta: 'Creative Website',
        description: 'Creative brand website focused on presenting a polished digital presence, visual identity, and conversion-oriented web experience.',
        url: 'https://qn-creative.com/',
    },
]

const contactLinks = [
    {
        label: 'Email',
        value: 'kaidev.contact@gmail.com'
    },
    {
        label: 'LinkedIn',
        value: 'https://www.linkedin.com/in/kaidevhere/'
    },
    {
        label: 'GitHub',
        value: 'https://github.com/kailearndev'
    },
]

const floatingIcons = ['</>', '{}', 'TS', 'Vue', 'API', 'DB', 'AWS', 'N3']
</script>

<template>
    <main class="site-shell">
        <div class="scroll-progress" aria-hidden="true"></div>

        <div class="ambient-lights" aria-hidden="true">
            <span class="light light-cyan"></span>
            <span class="light light-purple"></span>
            <span class="light light-blue"></span>
            <span class="light light-lime"></span>
            <span class="light light-coral"></span>
        </div>

        <div class="floating-icons" aria-hidden="true">
            <span v-for="(icon, index) in floatingIcons" :key="icon" :class="`float-icon float-icon-${index + 1}`">
                {{ icon }}
            </span>
        </div>

        <header class="site-header reveal-down">
            <a class="brand" href="#hero" aria-label="Go to hero section">
                Kai<span>Dev</span>
            </a>

            <nav class="nav-links" aria-label="Primary navigation">
                <a v-for="item in navItems" :key="item.href" :href="item.href">
                    {{ item.label }}
                </a>
            </nav>

            <a class="header-action" href="#contact">
                Contact
            </a>
        </header>

        <section id="hero" class="hero-section section">
            <div class="hero-grid">
                <div class="hero-copy">
                    <div class="eyebrow hero-stagger">Senior Frontend Developer</div>
                    <h1 class="hero-title hero-stagger">NGUYEN VU LUAN</h1>
                    <p class="hero-desc hero-stagger">
                        Building scalable web applications with React, Next.js, TypeScript, Node.js and PostgreSQL.
                    </p>

                    <div class="hero-actions hero-stagger">
                        <a class="btn btn-primary" href="#projects">
                            <span aria-hidden="true">▣</span>
                            View Projects
                        </a>
                        <a class="btn btn-secondary" href="#contact">
                            <span aria-hidden="true">↗</span>
                            Contact Me
                        </a>
                    </div>
                </div>

                <aside class="hero-panel glass-card hero-stagger">
                    <div class="panel-status">
                        <span></span>
                        Available for frontend and fullstack roles
                    </div>
                    <div class="terminal-lines" aria-label="Profile metadata">
                        <p><span>location</span> Ho Chi Minh City</p>
                        <p><span>focus</span> Product UI, scalable frontend, backend expansion</p>
                        <p><span>language</span> Japanese JLPT N3 communication</p>
                    </div>
                </aside>
            </div>

            <a class="scroll-cue" href="#avatar" aria-label="Scroll to profile">
                <span></span>
            </a>
        </section>

        <section id="avatar" class="avatar-section section">
            <div class="avatar-stage">
                <div class="avatar-ring">
                    <img src="/avt.jpg" alt="Nguyen Vu Luan portrait" class="avatar-image" />
                </div>
                <div class="avatar-copy">
                    <p class="eyebrow">Fullstack-Oriented</p>
                    <h2>NGUYEN VU LUAN</h2>
                    <p>5+ Years Experience</p>
                </div>
            </div>
        </section>

        <section id="about" class="section about-section">
            <div class="section-heading reveal-up">
                <p class="eyebrow">About Me</p>
                <h2>Frontend Developer with production depth.</h2>
            </div>

            <div class="about-grid">
                <div class="portrait-card glass-card reveal-left">
                    <img src="/avt.jpg" alt="Nguyen Vu Luan" />
                    <div>
                        <strong>Kai</strong>
                        <span>Frontend / Fullstack-Oriented Developer</span>
                    </div>
                </div>

                <div class="about-content reveal-right">
                    <p>
                        Frontend Developer with 5+ years of experience building scalable web applications using React,
                        Next.js and TypeScript.
                    </p>
                    <p>
                        Currently expanding into backend development using Node.js, NestJS, PostgreSQL and Cloud
                        technologies while collaborating directly with Japanese stakeholders using JLPT N3 Japanese.
                    </p>

                    <div class="highlight-grid">
                        <span v-for="highlight in highlights" :key="highlight" class="highlight-chip">
                            {{ highlight }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <section id="stack" class="section">
            <div class="section-heading reveal-up">
                <p class="eyebrow">Tech Stack</p>
                <h2>Tools for reliable product delivery.</h2>
            </div>

            <div class="stack-grid">
                <article v-for="group in stackGroups" :key="group.title"
                    class="stack-card glass-card tilt-card reveal-up">
                    <h3>{{ group.title }}</h3>
                    <div class="chip-list">
                        <span v-for="item in group.items" :key="item" class="chip">{{ item }}</span>
                    </div>
                </article>
            </div>
        </section>

        <section id="experience" class="section experience-section">
            <div class="section-heading reveal-up">
                <p class="eyebrow">Experience</p>
                <h2>Shipping business-critical web systems.</h2>
            </div>

            <div class="timeline">
                <article v-for="item in experiences" :key="item.company" class="timeline-item reveal-up">
                    <div class="timeline-dot" aria-hidden="true"></div>
                    <div class="glass-card timeline-card">
                        <div class="timeline-top">
                            <div>
                                <h3>{{ item.company }}</h3>
                                <p>{{ item.role }}</p>
                            </div>
                            <span>{{ item.period }}</span>
                        </div>
                        <p class="timeline-summary">{{ item.summary }}</p>
                        <div class="chip-list">
                            <span v-for="point in item.points" :key="point" class="chip">{{ point }}</span>
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section id="projects" class="section">
            <div class="section-heading reveal-up">
                <p class="eyebrow">Featured Projects</p>
                <h2>Selected product surfaces and workflows.</h2>
            </div>

            <div class="project-grid">
                <article v-for="project in projects" :key="project.title"
                    class="project-card glass-card tilt-card reveal-up">
                    <span>{{ project.meta }}</span>
                    <h3>{{ project.title }}</h3>
                    <p>{{ project.description }}</p>
                    <a v-if="project.url" class="project-link" :href="project.url" target="_blank" rel="noreferrer">
                        Visit Project
                        <span aria-hidden="true">↗</span>
                    </a>
                </article>
            </div>
        </section>

        <section class="section japanese-section">
            <div class="glass-card language-panel reveal-up">
                <p class="eyebrow">Japanese Communication</p>
                <h2>Collaborating with Japanese stakeholders using JLPT N3 Japanese.</h2>
                <p>
                    Comfortable with direct communication, requirements clarification, and cross-team delivery contexts
                    for Japanese market projects.
                </p>
            </div>
        </section>

        <section id="contact" class="section contact-section">
            <div class="contact-panel glass-card reveal-up">
                <div>
                    <p class="eyebrow">Contact</p>
                    <h2>Let's build scalable web products.</h2>
                    <p>
                        Available for opportunities.
                    </p>
                </div>

                <div class="contact-actions">
                    <span v-for="link in contactLinks" :key="link.value" class="contact-chip">
                        <a :href="link.value.startsWith('http') ? link.value : `mailto:${link.value}`" target="_blank"
                            rel="noreferrer">
                            {{ link.label }}
                        </a>
                    </span>
                    <a class="btn btn-secondary" href="#hero">
                        <span aria-hidden="true">↑</span>
                        Back Top
                    </a>
                </div>
            </div>
        </section>
    </main>
</template>
