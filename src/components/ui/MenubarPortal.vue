<script setup>
import { MenubarPortal } from 'radix-vue'

defineProps({
  to: {
    type: [String, Object],
    default: 'body'
  }
})
</script>

<template>
  <MenubarPortal :to="to" data-slot="menubar-portal">
    <slot />
  </MenubarPortal>
</template>
