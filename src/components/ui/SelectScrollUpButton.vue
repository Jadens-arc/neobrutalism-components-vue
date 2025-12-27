<script setup>
import { SelectScrollUpButton } from 'radix-vue'
import { ChevronUp } from 'lucide-vue-next'
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
  <SelectScrollUpButton
    data-slot="select-scroll-up"
    :class="buttonClass"
    v-bind="$attrs"
  >
    <ChevronUp class="size-4" />
  </SelectScrollUpButton>
</template>
