<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerTrigger'
})
</script>

<template>
  <DrawerPrimitive.Trigger data-slot="drawer-trigger">
    <slot />
  </DrawerPrimitive.Trigger>
</template>
