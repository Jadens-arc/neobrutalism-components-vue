<script setup>
import { TooltipTrigger } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <TooltipTrigger data-slot="tooltip-trigger" v-bind="$attrs">
    <slot />
  </TooltipTrigger>
</template>
