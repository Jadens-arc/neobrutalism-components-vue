import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const theme = ref('light')

  const setTheme = (newTheme) => {
    theme.value = newTheme
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
  })

  return {
    theme,
    setTheme,
    toggleTheme
  }
}
