<script setup>
import { DropdownMenuLabel } from 'radix-vue'
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
  <DropdownMenuLabel
    :class="classes"
    data-slot="dropdown-menu-label"
    :data-inset="inset"
  >
    <slot />
  </DropdownMenuLabel>
</template>
