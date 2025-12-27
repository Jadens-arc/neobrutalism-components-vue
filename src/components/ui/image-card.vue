<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

defineOptions({
  name: 'ImageCard'
})

const props = defineProps({
  imageUrl: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  }
})

const cardClass = computed(() =>
  cn(
    'w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow',
    props.class
  )
)
</script>

<template>
  <figure :class="cardClass">
    <img class="w-full aspect-4/3" :src="imageUrl" alt="image" />
    <figcaption class="border-t-2 text-main-foreground border-border p-4">
      {{ caption }}
    </figcaption>
  </figure>
</template>
