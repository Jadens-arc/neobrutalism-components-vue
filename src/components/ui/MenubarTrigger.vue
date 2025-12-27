<script setup>
import { MenubarTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  disabled: Boolean
})

const classes = computed(() =>
  cn(
    'flex cursor-default select-none items-center text-main-foreground rounded-base px-3 py-1.5 text-sm border-2 border-transparent font-heading outline-none focus:border-border data-[state=open]:border-border',
    props.class
  )
)
</script>

<template>
  <MenubarTrigger
    :class="classes"
    :disabled="disabled"
    data-slot="menubar-trigger"
  >
    <slot />
  </MenubarTrigger>
</template>
