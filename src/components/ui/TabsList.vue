<script setup>
import { TabsList } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const listClass = computed(() => 
  cn(
    "inline-flex h-12 items-center justify-center rounded-base border-2 border-border bg-background p-1 text-foreground",
    props.class
  )
)
</script>

<template>
  <TabsList
    data-slot="tabs-list"
    :class="listClass"
    v-bind="$attrs"
  >
    <slot />
  </TabsList>
</template>
