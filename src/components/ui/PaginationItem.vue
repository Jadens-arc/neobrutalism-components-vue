<template>
  <li
    data-slot="pagination-item"
    :class="cn('', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </li>
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
