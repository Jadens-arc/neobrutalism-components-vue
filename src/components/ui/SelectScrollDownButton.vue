<script setup>
import { SelectScrollDownButton } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

defineOptions({
  inheritAttrs: false
})

const buttonClass = computed(() => 
  cn(
    "flex cursor-default text-main-foreground font-base items-center justify-center py-1",
    props.class
  )
)
</script>

<template>
  <SelectScrollDownButton
    data-slot="select-scroll-down"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <ChevronDown class="size-4" />
  </SelectScrollDownButton>
</template>
