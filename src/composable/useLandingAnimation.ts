import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLandingAnimation() {
  onMounted(() => {
    const ctx = gsap.context(() => {
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.documentElement,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      })

      gsap.from('.reveal-down', {
        y: -18,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.hero-stagger', {
        y: 56,
        scale: 0.98,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power4.out',
      })

      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.timeline({
            scrollTrigger: {
              trigger: '#hero',
              start: 'top top',
              end: '+=90%',
              pin: true,
              scrub: 0.8,
              anticipatePin: 1,
            },
          })
            .to('.hero-copy', { y: -88, scale: 0.92, opacity: 0.18, ease: 'none' }, 0)
            .to('.hero-panel', { y: 88, scale: 0.9, opacity: 0, ease: 'none' }, 0)
            .to('.scroll-cue', { opacity: 0, ease: 'none' }, 0)

          gsap.timeline({
            scrollTrigger: {
              trigger: '#avatar',
              start: 'top top',
              end: '+=95%',
              pin: true,
              scrub: 0.9,
              anticipatePin: 1,
            },
          })
            .fromTo('.avatar-ring', { scale: 0.76, opacity: 0 }, { scale: 1.08, opacity: 1, ease: 'none' }, 0)
            .fromTo('.avatar-copy', { y: 90, opacity: 0 }, { y: -18, opacity: 1, ease: 'none' }, 0.12)
            .to('.avatar-ring', { scale: 1.18, opacity: 0.9, ease: 'none' }, 0.68)
        },
      })

      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((element) => {
        gsap.from(element, {
          y: 72,
          scale: 0.96,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 84%',
            end: 'top 58%',
            scrub: 0.35,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((element) => {
        gsap.from(element, {
          x: -54,
          scale: 0.97,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            end: 'top 58%',
            scrub: 0.35,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((element) => {
        gsap.from(element, {
          x: 54,
          scale: 0.97,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            end: 'top 58%',
            scrub: 0.35,
          },
        })
      })
    })

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.glass-card'))
    const handlePointerMove = (event: PointerEvent) => {
      const card = event.currentTarget as HTMLElement
      const rect = card.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100

      card.style.setProperty('--mx', `${x}%`)
      card.style.setProperty('--my', `${y}%`)
    }

    cards.forEach((card) => {
      card.addEventListener('pointermove', handlePointerMove)
    })

    onUnmounted(() => {
      cards.forEach((card) => {
        card.removeEventListener('pointermove', handlePointerMove)
      })
      ctx.revert()
    })
  })
}
