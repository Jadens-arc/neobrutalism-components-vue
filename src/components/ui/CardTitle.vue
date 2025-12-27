<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: String
})
</script>

<template>
  <div
    data-slot="card-title"
    :class="cn('font-heading leading-none', props.class)"
  >
    <slot />
  </div>
</template>
