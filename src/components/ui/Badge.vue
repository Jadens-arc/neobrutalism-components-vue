<script setup>
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'neutral'].includes(value)
  },
  class: {
    type: String,
    default: ''
  },
  asChild: {
    type: Boolean,
    default: false
  }
})

const badgeVariants = (variant) => {
  const base = "inline-flex items-center justify-center rounded-base border-2 border-border px-2.5 py-0.5 text-xs font-base w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] overflow-hidden"
  
  const variants = {
    default: "bg-main text-main-foreground",
    neutral: "bg-secondary-background text-foreground"
  }
  
  return `${base} ${variants[variant] || variants.default}`
}

const classes = computed(() => cn(badgeVariants(props.variant), props.class))
</script>

<template>
  <component 
    :is="asChild ? 'slot' : 'span'"
    data-slot="badge"
    :class="classes"
  >
    <slot />
  </component>
</template>
