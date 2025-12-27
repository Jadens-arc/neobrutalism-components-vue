<script setup>
import { DrawerClose as DrawerClosePrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerClose'
})
</script>

<template>
  <DrawerClosePrimitive data-slot="drawer-close">
    <slot />
  </DrawerClosePrimitive>
</template>
