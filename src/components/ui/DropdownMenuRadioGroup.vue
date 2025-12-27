<script setup>
import { DropdownMenuRadioGroup } from 'radix-vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <DropdownMenuRadioGroup
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </DropdownMenuRadioGroup>
</template>
