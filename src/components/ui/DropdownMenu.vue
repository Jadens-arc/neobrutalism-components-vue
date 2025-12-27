<script setup>
import { DropdownMenuRoot } from 'radix-vue'
import { computed } from 'vue'

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
  <DropdownMenuRoot
    :open="open"
    :default-open="defaultOpen"
    :modal="modal"
    data-slot="dropdown-menu"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </DropdownMenuRoot>
</template>
