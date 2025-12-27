<script setup>
import { MenubarRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  modelValue: String,
  defaultValue: String
})

const emit = defineEmits(['update:modelValue'])

const classes = computed(() =>
  cn(
    'flex h-11 items-center space-x-1 rounded-base border-2 border-border bg-main p-1 font-base',
    props.class
  )
)
</script>

<template>
  <MenubarRoot
    :class="classes"
    :model-value="modelValue"
    :default-value="defaultValue"
    data-slot="menubar"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
  </MenubarRoot>
</template>
