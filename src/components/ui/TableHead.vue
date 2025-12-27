<template>
  <th
    data-slot="table-head"
    :class="cn('h-12 px-4 text-left align-middle font-heading text-main-foreground [&:has([role=checkbox])]:pr-0', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </th>
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
