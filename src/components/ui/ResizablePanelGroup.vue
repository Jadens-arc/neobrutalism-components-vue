<template>
  <SplitterGroup
    data-slot="resizable-panel-group"
    :class="cn(
      'flex h-full w-full font-base data-[orientation=vertical]:flex-col',
      className
    )"
    v-bind="$attrs"
  >
    <slot />
  </SplitterGroup>
</template>

<script setup>
import { SplitterGroup } from 'radix-vue'
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
