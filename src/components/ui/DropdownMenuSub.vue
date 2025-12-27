<script setup>
import { DropdownMenuSub } from 'radix-vue'

const props = defineProps({
  open: Boolean,
  defaultOpen: Boolean
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <DropdownMenuSub
    :open="open"
    :default-open="defaultOpen"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </DropdownMenuSub>
</template>
