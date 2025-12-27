<script setup>
import { ContextMenuRadioItem, ContextMenuItemIndicator } from 'radix-vue'
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
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent py-1.5 pl-8 pr-2 gap-2 text-sm font-base text-main-foreground outline-hidden focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50',
    props.class
  )
)
</script>

<template>
  <ContextMenuRadioItem
    :class="classes"
    :value="value"
    :disabled="disabled"
    data-slot="context-menu-radio-item"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <Circle class="h-2 w-2 fill-current" />
      </ContextMenuItemIndicator>
    </span>
    <slot />
  </ContextMenuRadioItem>
</template>
