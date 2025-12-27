<script setup>
import { DrawerPortal as DrawerPortalPrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerPortal'
})
</script>

<template>
  <DrawerPortalPrimitive data-slot="drawer-portal">
    <slot />
  </DrawerPortalPrimitive>
</template>
