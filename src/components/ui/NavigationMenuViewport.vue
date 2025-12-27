<template>
  <div :class="cn('absolute top-full left-0 isolate z-50 flex justify-center')">
    <NavigationMenuViewport 
      data-slot="navigation-menu-viewport"
      :class="cn(
        'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-base border-2 border-border bg-main text-main-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
        props.class
      )"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import { NavigationMenuViewport } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
