<template>
  <ul
    data-slot="sidebar-menu-sub"
    data-sidebar="menu-sub"
    :class="cn(
      'border-l-foreground/50 mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l-2 px-2.5 py-0.5',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
  >
    <slot />
  </ul>
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
