<script setup>
import { SelectTrigger, SelectIcon } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
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
    "flex h-10 w-full items-center justify-between rounded-base border-2 border-border bg-main gap-2 px-3 py-2 text-sm font-base text-main-foreground ring-offset-white placeholder:text-foreground/50 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus:outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    props.class
  )
)
</script>

<template>
  <SelectTrigger
    data-slot="select-trigger"
    :class="triggerClass"
    v-bind="$attrs"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="size-4" />
    </SelectIcon>
  </SelectTrigger>
</template>
