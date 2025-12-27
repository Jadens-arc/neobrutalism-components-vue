<script setup>
import { DropdownMenuTrigger } from 'radix-vue'

defineProps({
  disabled: Boolean,
  asChild: Boolean
})
</script>

<template>
  <DropdownMenuTrigger
    :disabled="disabled"
    :as-child="asChild"
    data-slot="dropdown-menu-trigger"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
