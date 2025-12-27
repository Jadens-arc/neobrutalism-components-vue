<script setup>
import { DialogRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DialogRoot data-slot="sheet" v-bind="$attrs">
    <slot />
  </DialogRoot>
</template>
