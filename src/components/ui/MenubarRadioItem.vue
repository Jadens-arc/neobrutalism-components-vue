<script setup>
import { MenubarRadioItem, MenubarItemIndicator } from 'radix-vue'
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
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent py-1.5 pl-8 pr-2 text-sm font-base outline-hidden focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    props.class
  )
)
</script>

<template>
  <MenubarRadioItem
    :class="classes"
    :value="value"
    :disabled="disabled"
    data-slot="menubar-radio-item"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Circle class="size-2 fill-current" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarRadioItem>
</template>
