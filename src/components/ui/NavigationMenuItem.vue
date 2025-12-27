<template>
  <NavigationMenuItem 
    data-slot="navigation-menu-item"
    :class="cn('relative', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuItem>
</template>

<script setup>
import { NavigationMenuItem } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: undefined
  }
})
</script>
