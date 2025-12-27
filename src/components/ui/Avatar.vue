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
  "relative flex size-10 shrink-0 overflow-hidden rounded-full outline-2 outline-border",
  props.class
))
</script>

<template>
  <div 
    data-slot="avatar"
    :class="classes"
  >
    <slot />
  </div>
</template>
