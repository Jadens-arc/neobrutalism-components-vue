<script setup>
import { AlertDialogPortal } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <AlertDialogPortal data-slot="alert-dialog-portal" v-bind="$attrs">
    <slot />
  </AlertDialogPortal>
</template>
