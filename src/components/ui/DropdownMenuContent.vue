<script setup>
import { DropdownMenuContent, DropdownMenuPortal } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  sideOffset: {
    type: Number,
    default: 4
  },
  side: String,
  align: String,
  forceMount: Boolean
})

const classes = computed(() =>
  cn(
    'z-50 min-w-[8rem] overflow-hidden rounded-base border-2 border-border bg-main p-1 font-base text-main-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)',
    props.class
  )
)
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      :side-offset="sideOffset"
      :side="side"
      :align="align"
      :class="classes"
      :force-mount="forceMount"
      data-slot="dropdown-menu-content"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
