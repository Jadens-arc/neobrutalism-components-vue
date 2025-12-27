<script setup>
import { AccordionRoot } from 'radix-vue'

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <AccordionRoot data-slot="accordion" v-bind="$attrs">
    <slot />
  </AccordionRoot>
</template>
