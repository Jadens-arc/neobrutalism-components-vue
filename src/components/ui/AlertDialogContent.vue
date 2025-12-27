<script setup>
import { AlertDialogContent } from 'radix-vue'
import AlertDialogPortal from './AlertDialogPortal.vue'
import AlertDialogOverlay from './AlertDialogOverlay.vue'
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

defineOptions({
  inheritAttrs: false
})

const contentClass = computed(() => 
  cn(
    'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-base border-2 border-border p-6 shadow-shadow duration-200 sm:max-w-lg',
    props.class
  )
)
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContent 
      data-slot="alert-dialog-content"
      :class="contentClass"
      v-bind="$attrs"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
