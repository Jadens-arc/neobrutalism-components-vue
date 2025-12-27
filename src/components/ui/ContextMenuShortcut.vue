<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

const classes = computed(() =>
  cn('ml-auto text-xs font-base tracking-widest text-main-foreground', props.class)
)
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
