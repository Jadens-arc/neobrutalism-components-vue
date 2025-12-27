<template>
  <component
    :is="props.asChild ? 'slot' : 'a'"
    data-slot="breadcrumb-link"
    :class="cn(props.class)"
    v-bind="$attrs"
  >
    <slot v-if="props.asChild" />
    <slot v-else />
  </component>
</template>

<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: undefined
  }
})
</script>
