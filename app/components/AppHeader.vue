<template>

    <Drawer v-model:visible="showMenu">
        <template #header>
            <div class="flex items-center gap-2">
                <Avatar class="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
                    size="xlarge" 
                    shape="circle" 
                >
                    <NuxtImg src="/images/me-sm.webp" 
                        format="webp"
                        width="64"
                        height="64"
                        loading="lazy"
                        fetch-priority="low"
                    />
                </Avatar>
                <p class="text-xl font-bold">
                    Fernando Barajas
                </p>
            </div>
        </template>
        <p class="description">
            {{ $t('phrases.'+ randomFloat) }}
        </p>
        <div class="border-b border-gray-300 dark:border-gray-500 mt-3"></div>
        <AppMenu/>
        <template #footer >
            <div class="flex justify-center gap-2">
                <LangSwitch size="large"></LangSwitch>
            </div>
        </template>
    </Drawer>

    <header class="py-2 sticky top-0 transition-colors duration-500 z-20 flex justify-center" 
        :class="{'bg-surface-100 dark:bg-surface-900': showHeaderBackground}"
    >
        <nav class="container flex justify-between px-5 py-3">
            <div class="h-16 mt-1">
                <Avatar class="rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
                    :class="{ 'visible' : showHeaderBackground , 'hidden' : ! showHeaderBackground}"
                    size="xlarge" 
                    shape="circle" 
                >
                    <NuxtImg src="/images/me-sm.webp"
                        format="webp"
                        width="64"
                        height="64"
                        loading="lazy"
                        fetch-priority="low"
                    />
                </Avatar>
            </div>
            <div class="flex items-end">
                <div class="block md:hidden">
                    <Button text 
                        size="large" 
                        @click="toggleMenu" 
                        severity="secondary" 
                        :aria-label="$t('openmenu')"
                        role="button"
                    >
                        <Icon name="heroicons:bars-3" class="text-2xl"/>
                    </Button>
                </div>                        
                <div class="hidden md:block">
                    <AppMenu />
                </div>
                <div class="block md:hidden">
                    <DarkModeSwitch />
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y: verticalWindowScroll } = useWindowScroll()

const showMenu = ref(false)

const showHeaderBackground = ref(false)

const scrollThreshold = ref(50)

const toggleMenu = () => {
    showMenu.value = !showMenu.value
}

watch(verticalWindowScroll, async (value: number) => {
    showHeaderBackground.value = value > scrollThreshold.value
})

const randomFloat = Math.floor(Math.random() * 4);

</script>

<style scoped>

p.description {
    font-size: 16px;
    line-height: 32px;
    padding-right: 7%;
}

</style>