<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <input
    :type="type"
    data-slot="input"
    :class="cn(
      'flex h-10 w-full rounded-base border-2 border-border bg-secondary-background selection:bg-main selection:text-main-foreground px-3 py-2 text-sm font-base text-foreground file:border-0 file:bg-transparent file:text-sm file:font-heading placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    )"
    v-bind="$attrs"
  />
</template>
