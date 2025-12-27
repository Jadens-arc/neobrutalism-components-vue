<script setup>
import { MenubarContent, MenubarPortal } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  align: {
    type: String,
    default: 'start'
  },
  alignOffset: {
    type: Number,
    default: -4
  },
  sideOffset: {
    type: Number,
    default: 8
  },
  forceMount: Boolean
})

const classes = computed(() =>
  cn(
    'z-50 min-w-[12rem] overflow-hidden rounded-base border-2 border-border bg-main p-1 text-main-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 origin-(--radix-menubar-content-transform-origin)',
    props.class
  )
)
</script>

<template>
  <MenubarPortal>
    <MenubarContent
      :class="classes"
      :align="align"
      :align-offset="alignOffset"
      :side-offset="sideOffset"
      :force-mount="forceMount"
      data-slot="menubar-content"
    >
      <slot />
    </MenubarContent>
  </MenubarPortal>
</template>
