<template>
  <SplitterPanel
    data-slot="resizable-panel"
    :class="cn(className)"
    v-bind="$attrs"
  >
    <slot />
  </SplitterPanel>
</template>

<script setup>
import { SplitterPanel } from 'radix-vue'
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
