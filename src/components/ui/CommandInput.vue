<script setup>
import { Search } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
import { computed, inject } from 'vue'

const props = defineProps({
  class: String,
  placeholder: String,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const commandSearchQuery = inject('commandSearchQuery', null)

const inputValue = computed({
  get() {
    return props.modelValue !== undefined ? props.modelValue : (commandSearchQuery?.value || '')
  },
  set(value) {
    emit('update:modelValue', value)
    if (commandSearchQuery) {
      commandSearchQuery.value = value
    }
  }
})

const inputClasses = computed(() => 
  cn(
    'flex h-10 w-full rounded-base bg-transparent py-3 text-sm outline-hidden placeholder:text-main-foreground placeholder:opacity-50 disabled:cursor-not-allowed disabled:opacity-50',
    props.class
  )
)
</script>

<template>
  <div
    data-slot="command-input-wrapper"
    class="flex h-9 gap-2 items-center border-b-2 border-border px-3"
  >
    <Search class="size-4 shrink-0" />
    <input
      v-model="inputValue"
      data-slot="command-input"
      :class="inputClasses"
      :placeholder="placeholder"
      type="text"
    />
  </div>
</template>
