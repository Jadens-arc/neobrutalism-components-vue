<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'Drawer'
})

const props = defineProps({
  shouldScaleBackground: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <DrawerPrimitive.Root
    data-slot="drawer"
    :should-scale-background="shouldScaleBackground"
  >
    <slot />
  </DrawerPrimitive.Root>
</template>
