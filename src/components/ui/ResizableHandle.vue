<template>
  <SplitterResizeHandle
    data-slot="resizable-handle"
    :class="cn(
      'relative flex w-0.5 items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1 data-[orientation=vertical]:h-0.5 data-[orientation=vertical]:w-full data-[orientation=vertical]:after:left-0 data-[orientation=vertical]:after:h-1 data-[orientation=vertical]:after:w-full data-[orientation=vertical]:after:-translate-y-1/2 data-[orientation=vertical]:after:translate-x-0 [&[data-orientation=vertical]>div]:rotate-90',
      className
    )"
    v-bind="$attrs"
  >
    <div v-if="withHandle" class="z-10 flex h-4 w-3 items-center justify-center rounded-base border bg-border">
      <GripVertical class="size-2.5" />
    </div>
  </SplitterResizeHandle>
</template>

<script setup>
import { SplitterResizeHandle } from 'radix-vue'
import { GripVertical } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

defineProps({
  withHandle: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
