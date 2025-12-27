<template>
  <tr
    data-slot="table-row"
    :class="cn('border-b-2 border-border transition-colors text-main-foreground bg-main font-base data-[state=selected]:bg-secondary-background data-[state=selected]:text-main-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </tr>
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
