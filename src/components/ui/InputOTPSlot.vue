<template>
  <div
    data-slot="input-otp-slot"
    :data-active="isActive"
    :class="cn(
      'relative flex size-10 items-center justify-center border-y-2 border-r-2 border-border bg-secondary-background text-sm font-base text-foreground first:rounded-l-base first:border-l-2 last:rounded-r-base transition-all',
      isActive && 'z-10 ring-1 ring-ring',
      className
    )"
  >
    {{ char }}
    <div v-if="hasFakeCaret" class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="h-4 w-px animate-caret-blink bg-current duration-1000" />
    </div>
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  index: {
    type: Number,
    required: true
  },
  char: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: false
  },
  hasFakeCaret: {
    type: Boolean,
    default: false
  },
  className: {
    type: String,
    default: ''
  }
})
</script>
