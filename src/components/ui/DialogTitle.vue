<script setup>
import { DialogTitle } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

defineOptions({
  inheritAttrs: false
})

const titleClass = computed(() => 
  cn('text-lg font-heading leading-none tracking-tight', props.class)
)
</script>

<template>
  <DialogTitle 
    data-slot="dialog-title"
    :class="titleClass"
    v-bind="$attrs"
  >
    <slot />
  </DialogTitle>
</template>
