<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String
})

const listClasses = computed(() => 
  cn(
    'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
    props.class
  )
)
</script>

<template>
  <div
    data-slot="command-list"
    :class="listClasses"
    role="listbox"
  >
    <slot />
  </div>
</template>
