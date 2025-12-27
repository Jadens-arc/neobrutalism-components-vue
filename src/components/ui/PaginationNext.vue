<template>
  <PaginationLink
    data-slot="pagination-next"
    aria-label="Go to next page"
    size="default"
    :class="cn('gap-1 pr-2.5', props.class)"
    v-bind="$attrs"
  >
    <span>Next</span>
    <ChevronRight class="size-4" />
  </PaginationLink>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import PaginationLink from './PaginationLink.vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>
