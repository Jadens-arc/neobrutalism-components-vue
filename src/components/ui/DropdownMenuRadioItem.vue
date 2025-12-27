<script setup>
import { DropdownMenuRadioItem, DropdownMenuItemIndicator } from 'radix-vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  value: String,
  disabled: Boolean
})

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent gap-2 py-1.5 pl-8 pr-2 text-sm font-base outline-hidden transition-colors focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50',
    props.class
  )
)
</script>

<template>
  <DropdownMenuRadioItem
    :class="classes"
    :value="value"
    :disabled="disabled"
  >
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Circle class="size-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
