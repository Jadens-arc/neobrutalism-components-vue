<template>
  <a
    data-slot="sidebar-menu-sub-button"
    data-sidebar="menu-sub-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(
      'text-foreground hover:bg-main hover:outline-border hover:text-main-foreground active:bg-main outline-transparent outline-2 [&>svg]:text-main-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-base px-2 focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
      'data-[active=true]:bg-main data-[active=true]:outline-border',
      size === 'sm' && 'text-xs',
      size === 'md' && 'text-sm',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value)
  },
  isActive: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
