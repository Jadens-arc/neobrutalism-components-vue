<template>
  <NavigationMenuList 
    data-slot="navigation-menu-list"
    :class="cn(
      'group flex flex-1 list-none items-center font-heading justify-center space-x-1',
      props.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuList>
</template>

<script setup>
import { NavigationMenuList } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
