<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'DrawerHeader'
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const headerClass = computed(() =>
  cn('grid gap-1.5 p-4 text-center sm:text-left', props.class)
)
</script>

<template>
  <div
    data-slot="drawer-header"
    :class="headerClass"
  >
    <slot />
  </div>
</template>
