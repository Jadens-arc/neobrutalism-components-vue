<template>
  <NavigationMenuTrigger 
    data-slot="navigation-menu-trigger"
    :class="cn(
      'group inline-flex h-10 w-max items-center justify-center text-main-foreground rounded-base bg-main px-4 py-2 text-sm font-heading transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
      'group',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown
      class="relative top-[1px] ml-2 size-4 font-heading transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>

<script setup>
import { NavigationMenuTrigger } from 'radix-vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
