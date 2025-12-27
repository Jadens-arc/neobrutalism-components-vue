<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'DrawerFooter'
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const footerClass = computed(() =>
  cn('mt-auto flex flex-col gap-3 p-4', props.class)
)
</script>

<template>
  <div
    data-slot="drawer-footer"
    :class="footerClass"
  >
    <slot />
  </div>
</template>
