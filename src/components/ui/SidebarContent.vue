<template>
  <div
    data-slot="sidebar-content"
    data-sidebar="content"
    :class="cn(
      'flex min-h-0 flex-1 flex-col overflow-auto group-data-[collapsible=icon]:overflow-hidden',
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
