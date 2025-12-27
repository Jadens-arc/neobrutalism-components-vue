<script setup>
import { MenubarMenu } from 'radix-vue'

const props = defineProps({
  value: String
})
</script>

<template>
  <MenubarMenu :value="value" data-slot="menubar-menu">
    <slot />
  </MenubarMenu>
</template>
