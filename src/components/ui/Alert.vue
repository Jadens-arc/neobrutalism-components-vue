<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'destructive'].includes(value)
  }
})

const alertClasses = computed(() => {
  const baseClasses = 'relative w-full rounded-base border-2 border-border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current shadow-shadow'
  
  const variantClasses = {
    default: 'bg-main text-main-foreground',
    destructive: 'bg-black text-white'
  }
  
  return cn(baseClasses, variantClasses[props.variant], props.class)
})
</script>

<template>
  <div
    data-slot="alert"
    role="alert"
    :class="alertClasses"
  >
    <slot />
  </div>
</template>
