<script setup>
import { HoverCardTrigger } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <HoverCardTrigger data-slot="hover-card-trigger" v-bind="$attrs">
    <slot />
  </HoverCardTrigger>
</template>
