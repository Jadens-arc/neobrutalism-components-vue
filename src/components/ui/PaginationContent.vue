<template>
  <ul
    data-slot="pagination-content"
    :class="cn('flex flex-row items-center gap-1', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </ul>
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
