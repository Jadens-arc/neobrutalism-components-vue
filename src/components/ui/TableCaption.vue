<template>
  <caption
    data-slot="table-caption"
    :class="cn('mt-4 text-sm text-foreground font-base', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </caption>
</template>

<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
