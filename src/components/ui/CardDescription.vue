<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: String
})
</script>

<template>
  <div
    data-slot="card-description"
    :class="cn('text-sm font-base', props.class)"
  >
    <slot />
  </div>
</template>
