<script setup>
import { SelectLabel } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const labelClass = computed(() => 
  cn(
    "border-2 border-transparent py-1.5 pr-8 pl-2 text-sm font-base text-main-foreground/80",
    props.class
  )
)
</script>

<template>
  <SelectLabel
    data-slot="select-label"
    :class="labelClass"
    v-bind="$attrs"
  >
    <slot />
  </SelectLabel>
</template>
