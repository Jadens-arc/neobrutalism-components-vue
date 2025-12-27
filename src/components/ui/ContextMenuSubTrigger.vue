<script setup>
import { ContextMenuSubTrigger } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  inset: Boolean,
  disabled: Boolean
})

const classes = computed(() =>
  cn(
    'flex cursor-default select-none items-center rounded-base border-2 border-transparent bg-main px-2 py-1.5 text-sm font-base text-main-foreground outline-hidden data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 focus:border-border data-[state=open]:border-border',
    props.class
  )
)
</script>

<template>
  <ContextMenuSubTrigger
    :class="classes"
    :disabled="disabled"
    data-slot="context-menu-sub-trigger"
    :data-inset="inset"
  >
    <slot />
    <ChevronRight class="ml-auto" />
  </ContextMenuSubTrigger>
</template>
