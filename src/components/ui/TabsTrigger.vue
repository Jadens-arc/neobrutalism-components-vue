<script setup>
import { TabsTrigger } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const triggerClass = computed(() => 
  cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-base border-2 border-transparent px-2 py-1 gap-1.5 text-sm font-heading ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-main data-[state=active]:text-main-foreground data-[state=active]:border-border",
    props.class
  )
)
</script>

<template>
  <TabsTrigger
    data-slot="tabs-trigger"
    :class="triggerClass"
    v-bind="$attrs"
  >
    <slot />
  </TabsTrigger>
</template>
