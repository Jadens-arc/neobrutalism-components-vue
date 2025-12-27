<script setup>
import { SelectGroup } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <SelectGroup data-slot="select-group" v-bind="$attrs">
    <slot />
  </SelectGroup>
</template>
