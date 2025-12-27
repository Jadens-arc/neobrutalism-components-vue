<script setup>
import { ContextMenuRoot } from 'radix-vue'

const props = defineProps({
  open: Boolean,
  defaultOpen: Boolean,
  modal: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <ContextMenuRoot
    :open="open"
    :default-open="defaultOpen"
    :modal="modal"
    data-slot="context-menu"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </ContextMenuRoot>
</template>
