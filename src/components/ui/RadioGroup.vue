<template>
  <RadioGroupRoot
    data-slot="radio-group"
    :class="cn('grid gap-2', props.class)"
    v-bind="forwardedProps"
  >
    <slot />
  </RadioGroupRoot>
</template>

<script setup>
import { RadioGroupRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { useForwardPropsEmits } from 'radix-vue'

const props = defineProps({
  modelValue: { type: String },
  defaultValue: { type: String },
  disabled: { type: Boolean },
  name: { type: String },
  required: { type: Boolean },
  orientation: { type: String, default: 'vertical' },
  dir: { type: String },
  loop: { type: Boolean, default: true },
  class: { type: String }
})

const emits = defineEmits(['update:modelValue'])

const forwardedProps = useForwardPropsEmits(props, emits)
</script>
