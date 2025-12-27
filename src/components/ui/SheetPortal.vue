<script setup>
import { DialogPortal } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DialogPortal data-slot="sheet-portal" v-bind="$attrs">
    <slot />
  </DialogPortal>
</template>
