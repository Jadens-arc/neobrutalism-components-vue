<template>
  <CheckboxRoot
    data-slot="checkbox"
    :class="cn(
      'peer size-4 shrink-0 outline-2 outline-border ring-offset-white focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-main data-[state=checked]:text-white',
      props.class
    )"
    v-bind="forwardedProps"
  >
    <CheckboxIndicator
      data-slot="checkbox-indicator"
      :class="cn('flex items-center justify-center text-current')"
    >
      <Check class="size-4 text-main-foreground" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<script setup>
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { useForwardPropsEmits } from 'radix-vue'

const props = defineProps({
  defaultChecked: { type: Boolean },
  checked: { type: Boolean },
  disabled: { type: Boolean },
  required: { type: Boolean },
  name: { type: String },
  value: { type: String, default: 'on' },
  id: { type: String },
  class: { type: String }
})

const emits = defineEmits(['update:checked'])

const forwardedProps = useForwardPropsEmits(props, emits)
</script>
