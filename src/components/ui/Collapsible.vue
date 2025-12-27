<script setup>
import { CollapsibleRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <CollapsibleRoot data-slot="collapsible" v-bind="$attrs">
    <slot />
  </CollapsibleRoot>
</template>
