<template>
  <thead
    data-slot="table-header"
    :class="cn('[&_tr]:border-b-2 [&_tr]:border-border', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </thead>
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
