<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

const separatorClasses = computed(() => 
  cn(
    '-mx-1 h-0.5 bg-border',
    props.class
  )
)
</script>

<template>
  <div
    data-slot="command-separator"
    :class="separatorClasses"
    role="separator"
  />
</template>
