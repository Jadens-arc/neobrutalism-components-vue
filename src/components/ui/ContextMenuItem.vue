<script setup>
import { ContextMenuItem } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  inset: Boolean,
  disabled: Boolean
})

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent px-2 py-1.5 gap-2 text-sm outline-none focus:border-border data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    props.class
  )
)
</script>

<template>
  <ContextMenuItem
    :class="classes"
    :disabled="disabled"
    data-slot="context-menu-item"
    :data-inset="inset"
  >
    <slot />
  </ContextMenuItem>
</template>
