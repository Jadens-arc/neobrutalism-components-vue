<template>
  <span 
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn(props.class)"
    v-bind="$attrs"
  >
    <slot />
  </span>
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
