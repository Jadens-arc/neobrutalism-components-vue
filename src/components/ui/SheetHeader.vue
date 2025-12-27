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
  cn('flex flex-col gap-1.5 p-4', props.class)
)
</script>

<template>
  <div 
    data-slot="sheet-header"
    :class="headerClass"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
