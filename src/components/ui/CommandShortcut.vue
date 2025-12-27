<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

const shortcutClasses = computed(() => 
  cn(
    'ml-auto text-xs tracking-widest text-main-foreground',
    props.class
  )
)
</script>

<template>
  <span
    data-slot="command-shortcut"
    :class="shortcutClasses"
  >
    <slot />
  </span>
</template>
