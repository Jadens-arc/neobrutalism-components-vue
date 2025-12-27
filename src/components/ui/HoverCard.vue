<script setup>
import { HoverCardRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <HoverCardRoot data-slot="hover-card" v-bind="$attrs">
    <slot />
  </HoverCardRoot>
</template>
