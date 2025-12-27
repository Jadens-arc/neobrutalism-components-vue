<template>
  <div
    data-slot="sidebar-footer"
    data-sidebar="footer"
    :class="cn(
      'flex flex-col gap-2 p-2 border-t-2 border-t-border',
      className
    )"
  >
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
