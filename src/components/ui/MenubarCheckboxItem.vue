<script setup>
import { MenubarCheckboxItem, MenubarItemIndicator } from 'radix-vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  checked: [Boolean, String],
  disabled: Boolean
})

const emit = defineEmits(['update:checked'])

const classes = computed(() =>
  cn(
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent py-1.5 pl-8 pr-2 text-sm font-base outline-hidden focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    props.class
  )
)
</script>

<template>
  <MenubarCheckboxItem
    :class="classes"
    :checked="checked"
    :disabled="disabled"
    data-slot="menubar-checkbox-item"
    @update:checked="emit('update:checked', $event)"
  >
    <span class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
      <MenubarItemIndicator>
        <Check class="size-4" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
