<script setup>
import { SelectContent, SelectPortal, SelectViewport } from 'radix-vue'
import SelectScrollUpButton from './SelectScrollUpButton.vue'
import SelectScrollDownButton from './SelectScrollDownButton.vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  position: {
    type: String,
    default: 'popper'
  }
})

defineOptions({
  inheritAttrs: false
})

const contentClass = computed(() => 
  cn(
    "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-base border-2 border-border bg-main text-main-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
    props.position === "popper" &&
      "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
    props.class
  )
)

const viewportClass = computed(() => 
  cn(
    "p-1",
    props.position === "popper" &&
      "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
  )
)
</script>

<template>
  <SelectPortal>
    <SelectContent
      data-slot="select-content"
      :class="contentClass"
      :position="position"
      v-bind="$attrs"
    >
      <SelectScrollUpButton />
      <SelectViewport :class="viewportClass">
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
