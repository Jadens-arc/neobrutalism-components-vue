<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <label
    data-slot="label"
    :class="cn(
      'text-sm font-heading leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>
