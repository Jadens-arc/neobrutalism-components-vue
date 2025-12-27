<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'
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
  <DrawerPrimitive.Title
    data-slot="drawer-title"
    :class="titleClass"
  >
    <slot />
  </DrawerPrimitive.Title>
</template>
