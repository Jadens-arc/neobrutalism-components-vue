<template>
  <div
    data-slot="input-otp-group"
    :class="cn('flex items-center', className)"
  >
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils'

defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>
