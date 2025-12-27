<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerPortal'
})
</script>

<template>
  <DrawerPrimitive.Portal data-slot="drawer-portal">
    <slot />
  </DrawerPrimitive.Portal>
</template>
