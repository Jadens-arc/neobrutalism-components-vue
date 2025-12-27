<template>
  <a
    data-slot="pagination-link"
    :aria-current="isActive ? 'page' : undefined"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'icon',
    validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value)
  },
  class: {
    type: String,
    default: ''
  }
})

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-main-foreground bg-main border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        noShadow: "text-main-foreground bg-main border-2 border-border",
        neutral:
          "bg-secondary-background text-foreground border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none",
        reverse:
          "text-main-foreground bg-main border-2 border-border hover:translate-x-reverseBoxShadowX hover:translate-y-reverseBoxShadowY hover:shadow-shadow",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const buttonClass = computed(() => {
  return cn(
    buttonVariants({
      variant: 'noShadow',
      size: props.size,
    }),
    props.class,
    props.isActive && 'bg-black text-white'
  )
})
</script>
