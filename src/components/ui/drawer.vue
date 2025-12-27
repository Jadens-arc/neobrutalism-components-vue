<script setup>
import { DrawerRoot } from 'vaul-vue'
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
  <DrawerRoot
    data-slot="drawer"
    :should-scale-background="shouldScaleBackground"
  >
    <slot />
  </DrawerRoot>
</template>
