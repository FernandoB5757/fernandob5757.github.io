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