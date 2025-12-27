<script setup>
import { TabsRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const rootClass = computed(() => 
  cn("w-full", props.class)
)
</script>

<template>
  <TabsRoot
    data-slot="tabs"
    :class="rootClass"
    v-bind="$attrs"
  >
    <slot />
  </TabsRoot>
</template>
