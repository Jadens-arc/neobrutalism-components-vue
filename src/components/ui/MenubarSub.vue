<script setup>
import { MenubarSub } from 'radix-vue'

const props = defineProps({
  open: Boolean,
  defaultOpen: Boolean
})

const emit = defineEmits(['update:open'])
</script>

<template>
  <MenubarSub
    :open="open"
    :default-open="defaultOpen"
    data-slot="menubar-sub"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </MenubarSub>
</template>
