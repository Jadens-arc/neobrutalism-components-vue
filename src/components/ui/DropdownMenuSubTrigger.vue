<script setup>
import { DropdownMenuSubTrigger } from 'radix-vue'
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  disabled: Boolean,
  inset: Boolean,
  class: String
})

const classes = computed(() => 
  cn(
    'flex cursor-default select-none items-center rounded-base border-2 border-transparent bg-main px-2 py-1.5 text-sm font-base outline-hidden focus:border-border gap-2 data-[inset=true]:pl-8 [&_svg]:pointer-events-none [&_svg]:w-4 [&_svg]:h-4 [&_svg]:shrink-0',
    props.class
  )
)
</script>

<template>
  <DropdownMenuSubTrigger
    :disabled="disabled"
    :class="classes"
    data-slot="dropdown-menu-sub-trigger"
    :data-inset="inset"
  >
    <slot />
    <ChevronRight class="ml-auto" />
  </DropdownMenuSubTrigger>
</template>
