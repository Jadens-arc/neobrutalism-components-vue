<template>
  <div
    data-slot="sidebar-wrapper"
    :style="{
      '--sidebar-width': SIDEBAR_WIDTH,
      '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
    }"
    :class="cn(
      'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
      className
    )"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, provide, onMounted, onUnmounted, watch } from 'vue'
import { cn } from '@/lib/utils'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

const props = defineProps({
  defaultOpen: {
    type: Boolean,
    default: true
  },
  open: {
    type: Boolean,
    default: undefined
  },
  className: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:open'])

const isMobile = ref(false)
const openMobile = ref(false)
const internalOpen = ref(props.defaultOpen)

const isControlled = computed(() => props.open !== undefined)
const currentOpen = computed(() => isControlled.value ? props.open : internalOpen.value)

const setOpen = (value) => {
  const newValue = typeof value === 'function' ? value(currentOpen.value) : value
  
  if (isControlled.value) {
    emit('update:open', newValue)
  } else {
    internalOpen.value = newValue
  }

  document.cookie = `${SIDEBAR_COOKIE_NAME}=${newValue}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
}

const toggleSidebar = () => {
  if (isMobile.value) {
    openMobile.value = !openMobile.value
  } else {
    setOpen(!currentOpen.value)
  }
}

const state = computed(() => currentOpen.value ? 'expanded' : 'collapsed')

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

const handleKeyDown = (event) => {
  if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
    event.preventDefault()
    toggleSidebar()
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('keydown', handleKeyDown)
})

provide('sidebar', {
  state,
  open: currentOpen,
  setOpen,
  openMobile,
  setOpenMobile: (value) => { openMobile.value = value },
  isMobile,
  toggleSidebar
})
</script>
