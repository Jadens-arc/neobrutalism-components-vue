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
  cn('text-foreground font-heading', props.class)
)
</script>

<template>
  <DialogTitle 
    data-slot="sheet-title"
    :class="titleClass"
    v-bind="$attrs"
  >
    <slot />
  </DialogTitle>
</template>
