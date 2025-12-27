<script setup>
import { TooltipRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <TooltipRoot data-slot="tooltip" v-bind="$attrs">
    <slot />
  </TooltipRoot>
</template>
