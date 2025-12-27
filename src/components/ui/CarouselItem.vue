<template>
  <div
    :class="cn(
      'min-w-0 shrink-0 grow-0 basis-full',
      orientation === 'horizontal' ? 'pl-4' : 'pt-4',
      props.class
    )"
    role="group"
    aria-roledescription="slide"
    data-slot="carousel-item"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const carouselContext = inject('carouselApi')
if (!carouselContext) {
  throw new Error('CarouselItem must be used within a Carousel component')
}

const { orientation } = carouselContext
</script>
