<script setup>
import { MenubarRadioGroup } from 'radix-vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <MenubarRadioGroup
    :model-value="modelValue"
    data-slot="menubar-radio-group"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </MenubarRadioGroup>
</template>
