<script setup>
import { CollapsibleContent } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <CollapsibleContent data-slot="collapsible-content" v-bind="$attrs">
    <slot />
  </CollapsibleContent>
</template>
