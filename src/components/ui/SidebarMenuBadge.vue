<template>
  <div
    data-slot="sidebar-menu-badge"
    data-sidebar="menu-badge"
    :class="cn(
      'text-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-base px-1 text-xs font-base tabular-nums select-none',
      'peer-hover/menu-button:text-main-foreground',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
      'group-data-[collapsible=icon]:hidden',
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
