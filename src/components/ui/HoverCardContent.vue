<script setup>
import { HoverCardContent } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  align: {
    type: String,
    default: 'center'
  },
  sideOffset: {
    type: Number,
    default: 4
  },
  class: {
    type: String,
    default: ''
  }
})

const contentClass = computed(() => 
  cn(
    "z-50 w-64 rounded-base border-2 border-border bg-main p-4 font-base text-main-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
    props.class
  )
)

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <HoverCardContent
    data-slot="hover-card-content"
    :align="align"
    :side-offset="sideOffset"
    :class="contentClass"
    v-bind="$attrs"
  >
    <slot />
  </HoverCardContent>
</template>
