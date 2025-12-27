<script setup>
import { ContextMenuRadioGroup } from 'radix-vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <ContextMenuRadioGroup
    :model-value="modelValue"
    data-slot="context-menu-radio-group"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </ContextMenuRadioGroup>
</template>
