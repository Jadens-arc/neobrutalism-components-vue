<template>
  <li 
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    :class="cn('[&>svg]:size-3.5', props.class)"
    v-bind="$attrs"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
