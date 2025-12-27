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
  "animate-pulse rounded-base bg-secondary-background border-2 border-border",
  props.class
))
</script>

<template>
  <div 
    data-slot="skeleton"
    :class="classes"
  >
    <slot />
  </div>
</template>
