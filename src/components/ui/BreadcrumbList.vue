<template>
  <ol 
    data-slot="breadcrumb-list"
    :class="cn(
      'flex flex-wrap items-center gap-1.5 text-sm font-base break-words text-foreground sm:gap-2.5',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </ol>
</template>

<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
