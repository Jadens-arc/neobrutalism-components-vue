<script setup>
import { ContextMenuLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  inset: Boolean
})

const classes = computed(() =>
  cn(
    'px-2 py-1.5 text-sm font-base border-2 border-transparent text-main-foreground data-[inset]:pl-8',
    props.class
  )
)
</script>

<template>
  <ContextMenuLabel
    :class="classes"
    data-slot="context-menu-label"
    :data-inset="inset"
  >
    <slot />
  </ContextMenuLabel>
</template>
