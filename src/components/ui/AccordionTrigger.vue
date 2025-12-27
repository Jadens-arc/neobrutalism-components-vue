<script setup>
import { AccordionHeader, AccordionTrigger } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const triggerClass = computed(() => 
  cn(
    "flex flex-1 items-center justify-between text-left text-base text-main-foreground border-border focus-visible:ring-[3px] bg-main p-4 font-heading transition-all [&[data-state=open]>svg]:rotate-180 data-[state=open]:rounded-b-none data-[state=open]:border-b-2 disabled:pointer-events-none disabled:opacity-50",
    props.class
  )
)
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      data-slot="accordion-trigger"
      :class="triggerClass"
      v-bind="$attrs"
    >
      <slot />
      <ChevronDown class="pointer-events-none size-5 shrink-0 transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
