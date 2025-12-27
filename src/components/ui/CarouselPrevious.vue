<template>
  <Button
    :variant="variant"
    :size="size"
    :class="cn(
      'absolute size-8 rounded-base',
      orientation === 'horizontal'
        ? 'top-1/2 -left-12 -translate-y-1/2'
        : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class
    )"
    :disabled="!canScrollPrev"
    data-slot="carousel-previous"
    @click="scrollPrev"
    v-bind="$attrs"
  >
    <ArrowLeft />
    <span class="sr-only">Previous slide</span>
  </Button>
</template>

<script setup>
import { inject } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'
import Button from './Button.vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  variant: {
    type: String,
    default: 'noShadow'
  },
  size: {
    type: String,
    default: 'icon'
  },
  class: {
    type: String,
    default: ''
  }
})

const carouselContext = inject('carouselApi')
if (!carouselContext) {
  throw new Error('CarouselPrevious must be used within a Carousel component')
}

const { orientation, scrollPrev, canScrollPrev } = carouselContext
</script>
