<template>
  <NavigationMenuLink 
    data-slot="navigation-menu-link"
    :class="cn(
      'block select-none space-y-1 rounded-base p-2 leading-none no-underline outline-none transition-colors focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*=\'size-\'])]:size-4',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuLink>
</template>

<script setup>
import { NavigationMenuLink } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
