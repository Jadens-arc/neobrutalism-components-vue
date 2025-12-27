<template>
  <Sheet v-if="isMobile && collapsible !== 'none'" v-model:open="openMobile">
    <SheetContent
      data-sidebar="sidebar"
      data-slot="sidebar"
      data-mobile="true"
      :class="cn(
        'bg-secondary-background text-foreground w-(--sidebar-width) p-0 [&>button]:hidden'
      )"
      :style="{ '--sidebar-width': SIDEBAR_WIDTH_MOBILE }"
      :side="side"
    >
      <SheetHeader class="sr-only">
        <SheetTitle>Sidebar</SheetTitle>
        <SheetDescription>Displays the mobile sidebar.</SheetDescription>
      </SheetHeader>
      <div class="flex h-full w-full flex-col">
        <slot />
      </div>
    </SheetContent>
  </Sheet>

  <div
    v-else-if="collapsible === 'none'"
    data-slot="sidebar"
    :class="cn(
      'bg-secondary-background text-foreground flex h-full w-(--sidebar-width) flex-col',
      className
    )"
  >
    <slot />
  </div>

  <div
    v-else
    class="group peer hidden md:block"
    :data-state="state"
    :data-collapsible="state === 'collapsed' ? collapsible : ''"
    :data-variant="variant"
    :data-side="side"
    data-slot="sidebar"
  >
    <div
      data-slot="sidebar-gap"
      :class="cn(
        'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
        'group-data-[collapsible=offcanvas]:w-0',
        'group-data-[side=right]:rotate-180',
        variant === 'floating' || variant === 'inset'
          ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
          : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
      )"
    />
    <div
      data-slot="sidebar-container"
      :class="cn(
        'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
        side === 'left'
          ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
          : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
        variant === 'floating' || variant === 'inset'
          ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
          : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r-2 border-r-border group-data-[side=right]:border-l-2 border-l-border',
        className
      )"
    >
      <div
        data-sidebar="sidebar"
        data-slot="sidebar-inner"
        class="bg-secondary-background flex h-full w-full flex-col"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
import { cn } from '@/lib/utils'
import Sheet from './Sheet.vue'
import SheetContent from './SheetContent.vue'
import SheetHeader from './SheetHeader.vue'
import SheetTitle from './SheetTitle.vue'
import SheetDescription from './SheetDescription.vue'

const SIDEBAR_WIDTH_MOBILE = '18rem'

const props = defineProps({
  side: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  variant: {
    type: String,
    default: 'sidebar',
    validator: (value) => ['sidebar', 'floating', 'inset'].includes(value)
  },
  collapsible: {
    type: String,
    default: 'offcanvas',
    validator: (value) => ['offcanvas', 'icon', 'none'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const sidebar = inject('sidebar')
const { isMobile, state, openMobile } = sidebar
</script>
