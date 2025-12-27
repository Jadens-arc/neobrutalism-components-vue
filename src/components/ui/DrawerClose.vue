<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerClose'
})
</script>

<template>
  <DrawerPrimitive.Close data-slot="drawer-close">
    <slot />
  </DrawerPrimitive.Close>
</template>
