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
  cn('mt-auto flex flex-col gap-3 p-4', props.class)
)
</script>

<template>
  <div 
    data-slot="sheet-footer"
    :class="footerClass"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
