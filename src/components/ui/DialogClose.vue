<script setup>
import { DialogClose } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DialogClose data-slot="dialog-close" v-bind="$attrs">
    <slot />
  </DialogClose>
</template>
