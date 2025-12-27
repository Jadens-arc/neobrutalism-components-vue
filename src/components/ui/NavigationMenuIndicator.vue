<template>
  <NavigationMenuIndicator 
    data-slot="navigation-menu-indicator"
    :class="cn(
      'top-full z-[1] flex h-1.5 items-end font-heading justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      props.class
    )"
    v-bind="$attrs"
  >
    <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-white" />
  </NavigationMenuIndicator>
</template>

<script setup>
import { NavigationMenuIndicator } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
