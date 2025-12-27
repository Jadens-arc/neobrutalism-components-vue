<template>
  <Input
    data-slot="sidebar-input"
    data-sidebar="input"
    :class="cn(
      'bg-secondary-background h-8 w-full shadow-none',
      className
    )"
    v-bind="$attrs"
  />
</template>

<script setup>
import { cn } from '@/lib/utils'
import Input from './Input.vue'

defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
