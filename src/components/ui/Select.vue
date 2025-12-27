<script setup>
import { SelectRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <SelectRoot data-slot="select" v-bind="$attrs">
    <slot />
  </SelectRoot>
</template>
