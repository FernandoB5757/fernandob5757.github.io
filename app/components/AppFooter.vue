<template>
    <div class="border-t border-gray-200 dark:border-gray-800">
        <div class="container flex flex-col mx-auto px-5">
            <div class="flex flex-col items-center w-full py-12">
                <span class="mb-6 text-primary text-3xl font-bold font-serif">
                    JFBG
                </span>

                <div class="flex flex-wrap items-center justify-center gap-5 lg:gap-10 mb-6 text-sm uppercase tracking-wide">
                    <a href="#welcome-home" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                        {{ $t('home') }}
                    </a>
                    <a href="#about-me" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                        {{ $t('aboutme') }}
                    </a>
                    <a href="#my-portfolio" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                        {{ $t('portfolio') }}
                    </a>
                    <a href="#my-resume" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                        {{ $t('experiences.header') }}
                    </a>
                    <a href="#contact-with-me" class="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                        {{ $t('contact') }}
                    </a>
                </div>

                <div class="flex items-center gap-6 mb-6">
                    <a href="https://github.com/FernandoB5757"
                        class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="$t('accessibility.gotomy') + ' github'"
                    >
                        <Icon name="fa6-brands:github" class="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/jes%C3%BAs-fernando-barajas-galindo-965149285/"
                        class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        :aria-label="$t('accessibility.gotomy') + ' linkedin'"
                    >
                        <Icon name="fa6-brands:linkedin-in" class="text-xl" />
                    </a>
                    <a href="mailto:me@fernandobg.com"
                        class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                        :aria-label="$t('accessibility.gotomy') + ' email'"
                    >
                        <Icon name="heroicons:envelope" class="text-xl" />
                    </a>
                </div>

                <div class="flex flex-col items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                    <p>
                        {{ $t('footer.made_with') }} <span class="text-primary">Nuxt 3</span>
                        {{ $t('footer.and') }} <span class="text-primary">TailwindCSS</span>
                        &mdash;
                        <a href="https://github.com/FernandoB5757/fernandob5757.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="underline hover:text-primary transition-colors"
                        >
                            {{ $t('footer.source_code') }}
                        </a>
                    </p>
                    <p>
                        &copy; {{ currentYear }} Fernando Barajas. {{ $t('footer.rights') }}.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
