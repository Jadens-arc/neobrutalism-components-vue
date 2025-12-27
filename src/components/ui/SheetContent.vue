<script setup>
import { DialogContent, DialogClose } from 'radix-vue'
import SheetPortal from './SheetPortal.vue'
import SheetOverlay from './SheetOverlay.vue'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  side: {
    type: String,
    default: 'right',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  }
})

defineOptions({
  inheritAttrs: false
})

const contentClass = computed(() => {
  const baseClass = 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 border-2 border-border transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500'
  
  const sideClasses = {
    right: 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
    left: 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
    top: 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
    bottom: 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t'
  }
  
  return cn(baseClass, sideClasses[props.side], props.class)
})
</script>

<template>
  <SheetPortal>
    <SheetOverlay />
    <DialogContent 
      data-slot="sheet-content"
      :class="contentClass"
      v-bind="$attrs"
    >
      <slot />
      <DialogClose class="absolute right-4 top-4 rounded-base ring-offset-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </DialogClose>
    </DialogContent>
  </SheetPortal>
</template>
