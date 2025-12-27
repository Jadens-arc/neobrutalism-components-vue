<script setup>
import { ContextMenuSeparator } from 'radix-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

const classes = computed(() =>
  cn('-mx-1 my-1 h-0.5 bg-border', props.class)
)
</script>

<template>
  <ContextMenuSeparator
    :class="classes"
    data-slot="context-menu-separator"
  />
</template>
