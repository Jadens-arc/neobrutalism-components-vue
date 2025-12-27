<script setup>
import { AccordionItem } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const itemClass = computed(() => 
  cn(
    "rounded-base overflow-hidden border-2 border-b border-border shadow-shadow",
    props.class
  )
)
</script>

<template>
  <AccordionItem
    data-slot="accordion-item"
    :class="itemClass"
    v-bind="$attrs"
  >
    <slot />
  </AccordionItem>
</template>
