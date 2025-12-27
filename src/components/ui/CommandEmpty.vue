<script setup>
import { cn } from '@/lib/utils'
import { computed, inject } from 'vue'

const props = defineProps({
  class: String
})

const commandSearchQuery = inject('commandSearchQuery', null)
const hasQuery = computed(() => commandSearchQuery?.value?.length > 0)

const emptyClasses = computed(() => 
  cn(
    'py-6 text-center text-sm',
    props.class
  )
)
</script>

<template>
  <div
    v-if="hasQuery"
    data-slot="command-empty"
    :class="emptyClasses"
  >
    <slot>
      No results found.
    </slot>
  </div>
</template>
