<script setup>
import { AlertDialogTitle } from 'radix-vue'
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
  cn('text-lg font-heading', props.class)
)
</script>

<template>
  <AlertDialogTitle 
    data-slot="alert-dialog-title"
    :class="titleClass"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogTitle>
</template>
