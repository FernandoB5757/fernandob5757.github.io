
import type { Theme } from '@@/shared/types/index'

export const useTheme = () => {
    const colorMode = useColorMode() // 'dark' | 'light' | 'system'

    const isDark = computed(() => colorMode.value === 'dark')

    const themes: Theme[] = [
        { 'key': 'system', 'label': 'System', 'icon': 'heroicons:computer-desktop' },
        { 'key': 'light', 'label': 'Light', 'icon': 'heroicons:sun' },
        { 'key': 'dark', 'label': 'Dark', 'icon': 'heroicons:moon' },
    ]

    const index = ref<number>(0)

    index.value = themes.findIndex((theme: Theme) => theme.key === colorMode.preference)

    const selectedTheme = ref(themes[index.value])

    const changeTheme = () => {
        index.value = index.value < 2 ? index.value + 1 : 0
        colorMode.preference = themes[index.value]!.key
        selectedTheme.value = themes[index.value]!
    }

    return {
        colorMode,
        isDark,
        themes,
        index,
        selectedTheme,
        changeTheme
    }
  }
