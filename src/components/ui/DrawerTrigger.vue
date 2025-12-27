<script setup>
import { DrawerTrigger as DrawerTriggerPrimitive } from 'vaul-vue'

defineOptions({
  name: 'DrawerTrigger'
})
</script>

<template>
  <DrawerTriggerPrimitive data-slot="drawer-trigger">
    <slot />
  </DrawerTriggerPrimitive>
</template>
