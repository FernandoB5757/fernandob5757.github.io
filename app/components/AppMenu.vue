<template>
    <nav :aria-label="$t('accessibility.main_navigation') ?? 'Main navigation'">
        <ul class="flex flex-col md:flex-row gap-x-1 font-serif items-start uppercase">
            <li v-for="item in navItems" :key="item.href" class="w-full md:w-auto">
                <Button
                    as="a"
                    :href="item.href"
                    text
                    size="large"
                    :severity="activeSection === item.id ? 'primary' : 'secondary'"
                    class="w-full md:w-auto justify-start text-sm"
                    :aria-current="activeSection === item.id ? 'true' : undefined"
                    @click="$emit('navigate')"
                >
                    {{ $t(item.labelKey) }}
                </Button>
            </li>
            <li class="w-full md:w-auto">
                <Button
                    as="a"
                    href="https://github.com/FernandoB5757"
                    target="_blank"
                    rel="noopener noreferrer"
                    text
                    size="large"
                    severity="secondary"
                    class="w-full md:w-auto justify-start"
                    :aria-label="$t('accessibility.gotomy') + ' GitHub'"
                >
                    <Icon name="fa6-brands:github" class="text-xl" />
                </Button>
            </li>
            <li class="hidden md:block">
                <DarkModeSwitch size="large" />
            </li>
            <li class="hidden md:block">
                <LangSwitch size="large" class="w-full h-full md:w-auto" />
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

defineEmits<{
    navigate: []
}>()

const navItems = [
    { id: 'welcome-home', href: '#welcome-home', labelKey: 'home' },
    { id: 'about-me', href: '#about-me', labelKey: 'aboutme' },
    { id: 'my-portfolio', href: '#my-portfolio', labelKey: 'portfolio' },
    { id: 'my-resume', href: '#my-resume', labelKey: 'experiences.header' },
    { id: 'contact-with-me', href: '#contact-with-me', labelKey: 'contact' },
]

const activeSection = ref('welcome-home')
const { y } = useWindowScroll()

const updateActiveSection = () => {
    if (!import.meta.client) return

    const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id),
    })).filter(s => s.el)

    const scrollY = y.value + 150

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]!
        if (section.el && section.el.offsetTop <= scrollY) {
            activeSection.value = section.id
            return
        }
    }
    activeSection.value = 'welcome-home'
}

watch(y, updateActiveSection)
</script>
