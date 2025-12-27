<template>
  <Tooltip v-if="tooltip">
    <TooltipTrigger as-child>
      <button
        data-slot="sidebar-menu-button"
        data-sidebar="menu-button"
        :data-size="size"
        :data-active="isActive"
        :class="cn(buttonClasses, className)"
        v-bind="$attrs"
      >
        <slot />
      </button>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      align="center"
      :hidden="state !== 'collapsed' || isMobile"
    >
      {{ typeof tooltip === 'string' ? tooltip : tooltip.children }}
    </TooltipContent>
  </Tooltip>

  <button
    v-else
    data-slot="sidebar-menu-button"
    data-sidebar="menu-button"
    :data-size="size"
    :data-active="isActive"
    :class="cn(buttonClasses, className)"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { inject, computed } from 'vue'
import { cn } from '@/lib/utils'
import Tooltip from './Tooltip.vue'
import TooltipTrigger from './TooltipTrigger.vue'
import TooltipContent from './TooltipContent.vue'

const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'sm', 'lg'].includes(value)
  },
  tooltip: {
    type: [String, Object],
    default: null
  },
  className: {
    type: String,
    default: ''
  }
})

const sidebar = inject('sidebar', null)
const state = sidebar?.state
const isMobile = sidebar?.isMobile

const buttonClasses = computed(() => {
  const base = 'peer/menu-button flex w-full items-center gap-2 overflow-hidden outline-2 outline-transparent rounded-base p-2 text-left text-sm ring-ring transition-[width,height,padding] hover:bg-main hover:text-main-foreground hover:outline-border focus-visible:outline-border focus-visible:text-main-foreground focus-visible:bg-main disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0'
  
  const sizeClasses = {
    default: 'h-8 text-sm',
    sm: 'h-7 text-xs',
    lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!'
  }
  
  return cn(base, sizeClasses[props.size])
})
</script>
