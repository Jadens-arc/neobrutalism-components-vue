<script setup>
import { Drawer as DrawerPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'DrawerOverlay'
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const overlayClass = computed(() =>
  cn(
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-overlay',
    props.class
  )
)
</script>

<template>
  <DrawerPrimitive.Overlay
    data-slot="drawer-overlay"
    :class="overlayClass"
  />
</template>
