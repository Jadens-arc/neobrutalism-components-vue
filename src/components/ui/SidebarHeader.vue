<template>
  <div
    data-slot="sidebar-header"
    data-sidebar="header"
    :class="cn(
      'flex flex-col gap-2 p-2 border-b-2 border-b-border',
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
