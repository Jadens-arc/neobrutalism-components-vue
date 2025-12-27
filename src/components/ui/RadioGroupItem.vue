<template>
  <RadioGroupItem
    data-slot="radio-group-item"
    :class="cn(
      'aspect-square size-4 rounded-full border-2 border-border text-black dark:text-white focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    v-bind="forwardedProps"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <Circle class="size-2 fill-current text-current" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

<script setup>
import { RadioGroupItem, RadioGroupIndicator } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { useForwardPropsEmits } from 'radix-vue'

const props = defineProps({
  value: { type: String, required: true },
  disabled: { type: Boolean },
  required: { type: Boolean },
  id: { type: String },
  class: { type: String }
})

const emits = defineEmits([])

const forwardedProps = useForwardPropsEmits(props, emits)
</script>
