<script setup>
import { cn } from '@/lib/utils'
import { DatePicker } from 'v-calendar'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { computed } from 'vue'
import 'v-calendar/style.css'

const props = defineProps({
  class: String,
  showOutsideDays: {
    type: Boolean,
    default: true
  },
  mode: {
    type: String,
    default: 'single',
    validator: (value) => ['single', 'range', 'multiple'].includes(value)
  },
  modelValue: [Date, Object, Array]
})

const emit = defineEmits(['update:modelValue'])

const calendarClasses = computed(() => 
  cn(
    'rounded-base! border-2 border-border bg-main p-3 font-heading shadow-shadow',
    props.class
  )
)

const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <DatePicker 
    v-model="model"
    :mode="mode"
    :class="calendarClasses"
    :show-outside-days="showOutsideDays"
    color="gray"
    is-dark
    :attributes="[]"
  >
    <template #header-left-button>
      <ChevronLeft class="size-4" />
    </template>
    <template #header-right-button>
      <ChevronRight class="size-4" />
    </template>
  </DatePicker>
</template>

<style scoped>
:deep(.vc-container) {
  @apply rounded-base border-2 border-border bg-main p-3 font-heading shadow-shadow;
}

:deep(.vc-weeks) {
  @apply border-collapse space-y-1;
}

:deep(.vc-weekday) {
  @apply text-main-foreground rounded-base w-9 font-base text-[0.8rem];
}

:deep(.vc-day) {
  @apply size-9 p-0 font-base;
}

:deep(.vc-day-content) {
  @apply flex items-center justify-center rounded-base size-9 p-0 font-base;
  @apply hover:bg-black/10;
}

:deep(.vc-day-content:focus) {
  @apply relative z-20;
}

:deep(.vc-highlight) {
  @apply bg-black text-white rounded-base;
}

:deep(.vc-highlight-content-light) {
  @apply bg-black/50 text-white;
}

:deep(.is-today .vc-day-content) {
  @apply bg-secondary-background text-foreground;
}

:deep(.vc-day:not(.in-month) .vc-day-content) {
  @apply text-main-foreground opacity-50;
}

:deep(.vc-disabled) {
  @apply text-main-foreground opacity-50 rounded-base;
}

:deep(.vc-header) {
  @apply flex justify-center pt-1 relative items-center w-full text-main-foreground;
}

:deep(.vc-title) {
  @apply text-sm font-heading;
}

:deep(.vc-arrow) {
  @apply size-7 bg-transparent p-0 border-2 border-border rounded-base;
  @apply hover:bg-main;
}

:deep(.vc-nav-arrow) {
  @apply size-4;
}

:deep(.vc-weeks) {
  @apply mt-2;
}

:deep(.vc-weekdays) {
  @apply flex;
}

:deep(.vc-week) {
  @apply flex w-full mt-2;
}

:deep(.vc-day-content.is-disabled) {
  @apply pointer-events-none opacity-50;
}
</style>
