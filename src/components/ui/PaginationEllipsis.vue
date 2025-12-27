<template>
  <span
    data-slot="pagination-ellipsis"
    aria-hidden
    :class="cn('flex size-9 items-center justify-center', props.class)"
    v-bind="$attrs"
  >
    <MoreHorizontal class="size-4" />
    <span class="sr-only">More pages</span>
  </span>
</template>

<script setup>
import { MoreHorizontal } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
