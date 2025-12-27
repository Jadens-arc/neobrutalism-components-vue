<script setup>
import { TooltipProvider } from 'radix-vue'

defineProps({
  delayDuration: {
    type: Number,
    default: 0
  }
})

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <TooltipProvider 
    data-slot="tooltip-provider" 
    :delay-duration="delayDuration"
    v-bind="$attrs"
  >
    <slot />
  </TooltipProvider>
</template>
