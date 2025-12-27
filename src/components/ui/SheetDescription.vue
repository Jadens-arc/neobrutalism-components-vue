<script setup>
import { DialogDescription } from 'radix-vue'
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
  cn('text-sm text-foreground font-base', props.class)
)
</script>

<template>
  <DialogDescription 
    data-slot="sheet-description"
    :class="descriptionClass"
    v-bind="$attrs"
  >
    <slot />
  </DialogDescription>
</template>
