<script setup>
import { AccordionContent } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const contentWrapperClass = computed(() => 
  cn("p-4", props.class)
)
</script>

<template>
  <AccordionContent
    data-slot="accordion-content"
    class="overflow-hidden rounded-b-base bg-secondary-background text-sm font-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    v-bind="$attrs"
  >
    <div :class="contentWrapperClass">
      <slot />
    </div>
  </AccordionContent>
</template>
