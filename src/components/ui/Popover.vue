<script setup>
import { PopoverRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <PopoverRoot data-slot="popover" v-bind="$attrs">
    <slot />
  </PopoverRoot>
</template>
