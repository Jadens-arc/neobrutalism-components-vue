<template>
  <PaginationLink
    data-slot="pagination-previous"
    aria-label="Go to previous page"
    size="default"
    :class="cn('gap-1 pl-2.5', props.class)"
    v-bind="$attrs"
  >
    <ChevronLeft class="size-4" />
    <span>Previous</span>
  </PaginationLink>
</template>

<script setup>
import { ChevronLeft } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import PaginationLink from './PaginationLink.vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
