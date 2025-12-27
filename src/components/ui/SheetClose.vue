<script setup>
import { DialogClose } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DialogClose data-slot="sheet-close" v-bind="$attrs">
    <slot />
  </DialogClose>
</template>
