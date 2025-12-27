<template>
  <ScrollAreaRoot
    :class="cn('relative overflow-hidden', props.class)"
    data-slot="scroll-area"
    v-bind="$attrs"
  >
    <ScrollAreaViewport class="h-full w-full font-base">
      <slot />
    </ScrollAreaViewport>
    <ScrollBar />
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>

<script setup>
import { ScrollAreaRoot, ScrollAreaViewport, ScrollAreaCorner } from 'radix-vue'
import { cn } from '@/lib/utils'
import ScrollBar from './ScrollBar.vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
