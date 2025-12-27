<script setup>
import { ContextMenuCheckboxItem, ContextMenuItemIndicator } from 'radix-vue'
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
    'relative flex cursor-default select-none items-center rounded-base border-2 border-transparent py-1.5 pl-8 pr-2 gap-2 text-sm font-base text-main-foreground outline-hidden focus:border-border data-disabled:pointer-events-none data-disabled:opacity-50',
    props.class
  )
)
</script>

<template>
  <ContextMenuCheckboxItem
    :class="classes"
    :checked="checked"
    :disabled="disabled"
    data-slot="context-menu-checkbox-item"
    @update:checked="emit('update:checked', $event)"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuItemIndicator>
        <Check class="h-4 w-4" />
      </ContextMenuItemIndicator>
    </span>
    <slot />
  </ContextMenuCheckboxItem>
</template>
