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

const headerClass = computed(() => 
  cn('flex flex-col gap-2 text-center sm:text-left', props.class)
)
</script>

<template>
  <div 
    data-slot="alert-dialog-header"
    :class="headerClass"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
