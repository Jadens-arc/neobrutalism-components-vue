<template>
  <div
    ref="emblaNode"
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    data-slot="carousel"
    @keydown.capture="handleKeyDown"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, provide } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  },
  opts: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['init-api'])

const emblaNode = ref()
const canScrollPrev = ref(false)
const canScrollNext = ref(false)
const api = ref(null)

const carouselOptions = computed(() => ({
  ...props.opts,
  axis: props.orientation === 'horizontal' ? 'x' : 'y'
}))

const scrollPrev = () => {
  api.value?.scrollPrev()
}

const scrollNext = () => {
  api.value?.scrollNext()
}

const onSelect = (emblaApi) => {
  if (!emblaApi) return
  canScrollPrev.value = emblaApi.canScrollPrev()
  canScrollNext.value = emblaApi.canScrollNext()
}

const handleKeyDown = (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    scrollPrev()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    scrollNext()
  }
}

onMounted(() => {
  if (!emblaNode.value) return

  const [emblaRef] = emblaCarouselVue(carouselOptions.value, props.plugins)
  emblaRef(emblaNode.value)
  
  const emblaApi = emblaNode.value.__emblaApi
  if (emblaApi) {
    api.value = emblaApi
    emit('init-api', emblaApi)
    
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }
})

provide('carouselApi', {
  api,
  orientation: computed(() => props.orientation || (props.opts?.axis === 'y' ? 'vertical' : 'horizontal')),
  scrollPrev,
  scrollNext,
  canScrollPrev,
  canScrollNext
})
</script>
