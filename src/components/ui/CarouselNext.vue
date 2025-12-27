<template>
  <Button
    :variant="variant"
    :size="size"
    :class="cn(
      'absolute h-8 w-8 rounded-base',
      orientation === 'horizontal'
        ? '-right-12 top-1/2 -translate-y-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class
    )"
    :disabled="!canScrollNext"
    data-slot="carousel-next"
    @click="scrollNext"
    v-bind="$attrs"
  >
    <ArrowRight />
    <span class="sr-only">Next slide</span>
  </Button>
</template>

<script setup>
import { inject } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
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
  throw new Error('CarouselNext must be used within a Carousel component')
}

const { orientation, scrollNext, canScrollNext } = carouselContext
</script>
