<template>
  <button
    data-slot="sidebar-group-action"
    data-sidebar="group-action"
    :class="cn(
      'absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-base p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'after:absolute after:-inset-2 md:after:hidden',
      'group-data-[collapsible=icon]:hidden',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </button>
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
