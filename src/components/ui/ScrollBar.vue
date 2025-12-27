<template>
  <ScrollAreaScrollbar
    :orientation="orientation"
    :class="cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      props.class
    )"
    data-slot="scroll-area-scrollbar"
    v-bind="$attrs"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </ScrollAreaScrollbar>
</template>

<script setup>
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  orientation: {
    type: String,
    default: 'vertical',
    validator: (value) => ['vertical', 'horizontal'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})
</script>
