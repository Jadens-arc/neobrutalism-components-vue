<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: String
})
</script>

<template>
  <div
    data-slot="alert-description"
    :class="cn(
      'col-start-2 grid justify-items-start gap-1 text-sm font-base [&_p]:leading-relaxed',
      props.class
    )"
  >
    <slot />
  </div>
</template>
