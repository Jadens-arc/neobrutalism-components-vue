<script setup>
import { SelectSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const separatorClass = computed(() => 
  cn(
    "-mx-1 my-1 h-px bg-border",
    props.class
  )
)
</script>

<template>
  <SelectSeparator
    data-slot="select-separator"
    :class="separatorClass"
    v-bind="$attrs"
  />
</template>
