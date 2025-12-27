<script setup>
import { cn } from '@/lib/utils'
import { computed } from 'vue'

const props = defineProps({
  class: String,
  heading: String
})

const groupClasses = computed(() => 
  cn(
    'text-main-foreground overflow-hidden p-2 [&_[data-slot=command-group-heading]]:px-2 [&_[data-slot=command-group-heading]]:py-1.5 [&_[data-slot=command-group-heading]]:text-base [&_[data-slot=command-group-heading]]:font-heading',
    props.class
  )
)
</script>

<template>
  <div
    data-slot="command-group"
    :class="groupClasses"
    role="group"
  >
    <div 
      v-if="heading || $slots.heading"
      data-slot="command-group-heading"
    >
      <slot name="heading">{{ heading }}</slot>
    </div>
    <slot />
  </div>
</template>
