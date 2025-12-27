<script setup>
import { computed, ref, onMounted } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['load', 'error'])

const classes = computed(() => cn("aspect-square size-full", props.class))

const handleLoad = (event) => {
  emit('load', event)
}

const handleError = (event) => {
  emit('error', event)
}
</script>

<template>
  <img 
    data-slot="avatar-image"
    :class="classes"
    :src="src"
    :alt="alt"
    @load="handleLoad"
    @error="handleError"
  />
</template>
