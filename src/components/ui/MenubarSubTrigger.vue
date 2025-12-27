<script setup>
import { MenubarSubTrigger } from 'radix-vue'
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
    'flex cursor-default select-none items-center rounded-base border-2 border-transparent px-3 py-1.5 text-sm font-base outline-hidden focus:border-border data-[state=open]:border-border data-[inset]:pl-8',
    props.class
  )
)
</script>

<template>
  <MenubarSubTrigger
    :class="classes"
    :disabled="disabled"
    data-slot="menubar-sub-trigger"
  >
    <slot />
    <ChevronRight class="ml-auto size-4" />
  </MenubarSubTrigger>
</template>
