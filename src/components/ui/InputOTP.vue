<template>
  <OtpInput
    data-slot="input-otp"
    :num-inputs="numInputs"
    :is-input-num="isInputNum"
    :should-auto-focus="shouldAutoFocus"
    :input-classes="cn('disabled:cursor-not-allowed', className)"
    :container-class="cn(
      'flex items-center gap-2 has-disabled:opacity-50',
      containerClassName
    )"
    v-bind="$attrs"
    @on-change="handleChange"
    @on-complete="handleComplete"
  >
    <slot />
  </OtpInput>
</template>

<script setup>
import OtpInput from 'vue3-otp-input'
import { cn } from '@/lib/utils'

const props = defineProps({
  numInputs: {
    type: Number,
    default: 6
  },
  isInputNum: {
    type: Boolean,
    default: true
  },
  shouldAutoFocus: {
    type: Boolean,
    default: true
  },
  className: {
    type: String,
    default: ''
  },
  containerClassName: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change', 'complete'])

const handleChange = (value) => {
  emit('change', value)
}

const handleComplete = (value) => {
  emit('complete', value)
}
</script>
