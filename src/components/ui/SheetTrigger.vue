<script setup>
import { DialogTrigger } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <DialogTrigger data-slot="sheet-trigger" v-bind="$attrs">
    <slot />
  </DialogTrigger>
</template>
