<script setup>
import { DrawerTitle as DrawerTitlePrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'DrawerTitle'
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const titleClass = computed(() =>
  cn(
    'text-lg font-heading leading-none tracking-tight',
    props.class
  )
)
</script>

<template>
  <DrawerTitlePrimitive
    data-slot="drawer-title"
    :class="titleClass"
  >
    <slot />
  </DrawerTitlePrimitive>
</template>
