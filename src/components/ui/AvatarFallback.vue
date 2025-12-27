<script setup>
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const classes = computed(() => cn(
  "flex size-full items-center justify-center rounded-full bg-secondary-background text-foreground font-base",
  props.class
))
</script>

<template>
  <div 
    data-slot="avatar-fallback"
    :class="classes"
  >
    <slot />
  </div>
</template>
