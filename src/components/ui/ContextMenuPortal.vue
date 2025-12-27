<script setup>
import { ContextMenuPortal } from 'radix-vue'

defineProps({
  to: {
    type: [String, Object],
    default: 'body'
  }
})
</script>

<template>
  <ContextMenuPortal :to="to" data-slot="context-menu-portal">
    <slot />
  </ContextMenuPortal>
</template>
