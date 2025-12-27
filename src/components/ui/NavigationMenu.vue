<template>
  <NavigationMenuRoot 
    data-slot="navigation-menu"
    :data-viewport="props.viewport"
    :class="cn(
      'relative z-10 flex max-w-max rounded-base font-heading border-border border-2 p-1 bg-main flex-1 items-center justify-center',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
    <NavigationMenuViewport v-if="props.viewport" />
  </NavigationMenuRoot>
</template>

<script setup>
import { NavigationMenuRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import NavigationMenuViewport from './NavigationMenuViewport.vue'

const props = defineProps({
  viewport: {
    type: Boolean,
    default: true
  },
  class: {
    type: String,
    default: undefined
  }
})
</script>
