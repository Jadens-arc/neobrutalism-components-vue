<template>
  <div
    data-slot="sidebar-group"
    data-sidebar="group"
    :class="cn(
      'relative flex w-full min-w-0 flex-col p-2 border-b-2 border-b-border last:border-b-0',
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
