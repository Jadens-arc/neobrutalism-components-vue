<template>
  <SliderRoot
    data-slot="slider"
    :min="props.min"
    :max="props.max"
    :class="cn(
      'relative flex w-full touch-none select-none items-center data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
      props.class
    )"
    v-bind="forwardedProps"
  >
    <SliderTrack
      data-slot="slider-track"
      class="relative w-full grow overflow-hidden rounded-base bg-secondary-background border-2 border-border data-[orientation=horizontal]:h-3 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-3"
    >
      <SliderRange
        data-slot="slider-range"
        class="absolute bg-main data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
      />
    </SliderTrack>
    <SliderThumb
      v-for="(_, index) in values"
      :key="index"
      data-slot="slider-thumb"
      class="block h-5 w-5 rounded-full border-2 border-border bg-white ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderRoot>
</template>

<script setup>
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'radix-vue'
import { cn } from '@/lib/utils'
import { useForwardPropsEmits } from 'radix-vue'
import { computed } from 'vue'

const props = defineProps({
  defaultValue: { type: Array },
  modelValue: { type: Array },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number, default: 1 },
  minStepsBetweenThumbs: { type: Number, default: 0 },
  orientation: { type: String, default: 'horizontal' },
  disabled: { type: Boolean },
  inverted: { type: Boolean },
  name: { type: String },
  class: { type: String }
})

const emits = defineEmits(['update:modelValue', 'valueCommit'])

const forwardedProps = useForwardPropsEmits(props, emits)

const values = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue
  }
  if (Array.isArray(props.defaultValue)) {
    return props.defaultValue
  }
  return [props.min, props.max]
})
</script>
