<script setup>
import { MenubarItem } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  inset: Boolean,
  disabled: Boolean
})

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent px-2 py-1.5 text-sm font-base outline-hidden focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    props.class
  )
)
</script>

<template>
  <MenubarItem
    :class="classes"
    :disabled="disabled"
    data-slot="menubar-item"
    :data-inset="inset"
  >
    <slot />
  </MenubarItem>
</template>
