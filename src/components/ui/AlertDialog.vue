<script setup>
import { AlertDialogRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <AlertDialogRoot data-slot="alert-dialog" v-bind="$attrs">
    <slot />
  </AlertDialogRoot>
</template>
