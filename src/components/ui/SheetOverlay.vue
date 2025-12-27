<script setup>
import { DialogOverlay } from 'radix-vue'
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

const overlayClass = computed(() => 
  cn(
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-overlay',
    props.class
  )
)
</script>

<template>
  <DialogOverlay 
    data-slot="sheet-overlay"
    :class="overlayClass"
    v-bind="$attrs"
  />
</template>
