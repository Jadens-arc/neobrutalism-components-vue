<script setup>
import { DropdownMenuPortal } from 'radix-vue'

defineProps({
  to: {
    type: [String, Object],
    default: 'body'
  }
})
</script>

<template>
  <DropdownMenuPortal :to="to">
    <slot />
  </DropdownMenuPortal>
</template>
