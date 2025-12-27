<script setup>
import { ContextMenuSub } from 'radix-vue'

const props = defineProps({
  open: Boolean,
  defaultOpen: Boolean
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <ContextMenuSub
    :open="open"
    :default-open="defaultOpen"
    data-slot="context-menu-sub"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </ContextMenuSub>
</template>
