<script setup>
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

const footerClass = computed(() => 
  cn('flex flex-col-reverse gap-3 sm:flex-row sm:justify-end', props.class)
)
</script>

<template>
  <div 
    data-slot="alert-dialog-footer"
    :class="footerClass"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
