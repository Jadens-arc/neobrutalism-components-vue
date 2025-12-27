<script setup>
import { AlertDialogTrigger } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <AlertDialogTrigger data-slot="alert-dialog-trigger" v-bind="$attrs">
    <slot />
  </AlertDialogTrigger>
</template>
