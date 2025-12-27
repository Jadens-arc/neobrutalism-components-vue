<script setup>
import { MenubarLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  inset: Boolean
})

const classes = computed(() =>
  cn(
    'px-2 py-1.5 text-sm font-heading data-[inset]:pl-8',
    props.class
  )
)
</script>

<template>
  <MenubarLabel
    :class="classes"
    data-slot="menubar-label"
    :data-inset="inset"
  >
    <slot />
  </MenubarLabel>
</template>
