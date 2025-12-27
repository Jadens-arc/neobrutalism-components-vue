<script setup>
import { TabsContent } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const contentClass = computed(() => 
  cn(
    "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    props.class
  )
)
</script>

<template>
  <TabsContent
    data-slot="tabs-content"
    :class="contentClass"
    v-bind="$attrs"
  >
    <slot />
  </TabsContent>
</template>
