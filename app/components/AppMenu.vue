<template>
    <ul class="flex flex-col md:flex-row gap-x-4 font-serif items-start  uppercase">
        <li class="w-full md:w-auto">
            <Button as="router-link"
                label="Router"
                :to="localePath('index')"
                text
                size="large"
                class="w-full md:w-auto justify-start"
                role="link"
                :aria-label="$t('accessibility.gotohome')"

            >
                {{ $t('home') }}
            </Button>
        </li>
        <li>
            <Button
                as="a"
                href="https://github.com/FernandoB5757"
                target="_blank"
                rel="noopener noreferrer"
                text
                size="large"
                severity="secondary"
                class="w-full md:w-auto justify-start"
                :aria-label="$t('accessibility.gotomy') + ' github'"
            >
                <Icon name="fa6-brands:github" class="text-xl" />
            </Button>
        </li>
        <li class="hidden md:block">
            <DarkModeSwitch size="large"></DarkModeSwitch>
        </li>
        <li class="hidden md:block">
            <LangSwitch size="large" class="w-full h-full md:w-auto"></LangSwitch>
        </li>
    </ul>
</template>
<script setup lang="ts">
const localePath = useLocalePath()
</script>
