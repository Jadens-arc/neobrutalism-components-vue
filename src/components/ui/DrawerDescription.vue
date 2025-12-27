<script setup>
import { DrawerDescription as DrawerDescriptionPrimitive } from 'vaul-vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'DrawerDescription'
})

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const descriptionClass = computed(() =>
  cn('text-sm font-base text-foreground', props.class)
)
</script>

<template>
  <DrawerDescriptionPrimitive
    data-slot="drawer-description"
    :class="descriptionClass"
  >
    <slot />
  </DrawerDescriptionPrimitive>
</template>
