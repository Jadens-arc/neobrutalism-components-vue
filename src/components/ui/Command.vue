<script setup>
import { cn } from '@/lib/utils'
import { computed, provide, ref } from 'vue'

const props = defineProps({
  class: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const searchQuery = computed({
  get() {
    return props.modelValue || ''
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

provide('commandSearchQuery', searchQuery)

const commandClasses = computed(() => 
  cn(
    'flex h-full w-full flex-col overflow-hidden rounded-[0px] border-2 border-border bg-main font-base text-main-foreground',
    props.class
  )
)
</script>

<template>
  <div 
    data-slot="command"
    :class="commandClasses"
    role="application"
  >
    <slot />
  </div>
</template>
