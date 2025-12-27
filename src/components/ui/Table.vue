<template>
  <div class="relative w-full overflow-auto">
    <table
      data-slot="table"
      :class="cn('w-full caption-bottom border-2 border-border text-sm', props.class)"
      v-bind="$attrs"
    >
      <slot />
    </table>
  </div>
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
