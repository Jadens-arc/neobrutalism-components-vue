<template>
  <div class="overflow-hidden" data-slot="carousel-content">
    <div
      :class="cn(
        'flex',
        orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
        props.class
      )"
      v-bind="$attrs"
    >
      <slot />
    </div>
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
  throw new Error('CarouselContent must be used within a Carousel component')
}

const { orientation } = carouselContext
</script>
