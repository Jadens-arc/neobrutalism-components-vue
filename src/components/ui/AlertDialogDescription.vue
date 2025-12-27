<script setup>
import { AlertDialogDescription } from 'radix-vue'
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

const descriptionClass = computed(() => 
  cn('text-sm font-base text-foreground', props.class)
)
</script>

<template>
  <AlertDialogDescription 
    data-slot="alert-dialog-description"
    :class="descriptionClass"
    v-bind="$attrs"
  >
    <slot />
  </AlertDialogDescription>
</template>
