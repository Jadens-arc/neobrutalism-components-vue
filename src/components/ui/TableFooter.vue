<template>
  <tfoot
    data-slot="table-footer"
    :class="cn('border-t-2 border-border bg-main font-base text-main-foreground last:[&>tr]:border-b-0', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tfoot>
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
