<script setup>
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  class: {
    type: String,
    default: ''
  }
})

const classes = computed(() => cn(
  "relative h-4 w-full overflow-hidden rounded-base border-2 border-border bg-secondary-background",
  props.class
))

const indicatorStyle = computed(() => ({
  transform: `translateX(-${100 - (props.value || 0)}%)`
}))
</script>

<template>
  <div 
    data-slot="progress"
    :class="classes"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div
      data-slot="progress-indicator"
      class="h-full w-full flex-1 border-r-2 border-border bg-main transition-all"
      :style="indicatorStyle"
    />
  </div>
</template>
