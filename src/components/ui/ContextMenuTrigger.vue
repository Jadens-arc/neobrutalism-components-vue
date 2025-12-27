<script setup>
import { ContextMenuTrigger } from 'radix-vue'

defineProps({
  disabled: Boolean,
  asChild: Boolean
})
</script>

<template>
  <ContextMenuTrigger
    :disabled="disabled"
    :as-child="asChild"
    data-slot="context-menu-trigger"
  >
    <slot />
  </ContextMenuTrigger>
</template>
