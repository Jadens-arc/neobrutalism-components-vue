import { ref, onMounted, onUnmounted } from 'vue'

const MOBILE_BREAKPOINT = 768

export function useMobile() {
  const isMobile = ref(false)

  const checkMobile = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
  }

  onMounted(() => {
    checkMobile()
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    mql.addEventListener('change', checkMobile)
    
    onUnmounted(() => {
      mql.removeEventListener('change', checkMobile)
    })
  })

  return isMobile
}
