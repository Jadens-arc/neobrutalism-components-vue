<template>
  <button
    data-slot="sidebar-menu-action"
    data-sidebar="menu-action"
    :class="cn(
      '[&_svg]:text-foreground hover:[&_svg]:text-main-foreground text-main-foreground hover:bg-main hover:outline-border outline-transparent outline-2 absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-base p-0 transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
      'after:absolute after:-inset-2 md:after:hidden',
      'peer-data-[size=sm]/menu-button:top-1',
      'peer-data-[size=default]/menu-button:top-1.5',
      'peer-data-[size=lg]/menu-button:top-2.5',
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
