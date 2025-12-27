<script setup>
import { cn } from '@/lib/utils'
import { computed, inject, ref } from 'vue'

const props = defineProps({
  class: String,
  disabled: Boolean,
  value: String
})

const emit = defineEmits(['select'])

const commandSearchQuery = inject('commandSearchQuery', null)
const isSelected = ref(false)

const shouldShow = computed(() => {
  if (!commandSearchQuery?.value) return true
  const query = commandSearchQuery.value.toLowerCase()
  const searchValue = props.value || ''
  return searchValue.toLowerCase().includes(query)
})

const itemClasses = computed(() => 
  cn(
    'relative flex cursor-default select-none items-center rounded-base px-2 py-1.5 gap-2 text-sm text-main-foreground outline-border outline-0 aria-selected:outline-2 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',
    props.class
  )
)

const handleClick = () => {
  if (!props.disabled) {
    emit('select', props.value)
  }
}

const handleKeydown = (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    handleClick()
  }
}
</script>

<template>
  <div
    v-show="shouldShow"
    data-slot="command-item"
    :class="itemClasses"
    :data-disabled="disabled"
    :aria-selected="isSelected"
    :aria-disabled="disabled"
    role="option"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <slot />
  </div>
</template>
