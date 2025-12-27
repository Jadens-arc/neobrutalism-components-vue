<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    :width="size ?? width"
    :height="size ?? height"
    v-bind="$attrs"
  >
    <path
      :fill="color ?? 'currentColor'"
      :stroke="stroke"
      :stroke-width="strokeWidth"
      :class="pathClassName"
      d="m100 5 3.635 86.223 63.54-58.398-58.398 63.54L195 100l-86.223 3.635 58.398 63.54-63.54-58.398L100 195l-3.635-86.223-63.54 58.398 58.398-63.54L5 100l86.223-3.635-58.398-63.54 63.54 58.398z"
    />
  </svg>
</template>

<script setup>
defineProps({
  color: String,
  size: Number,
  stroke: String,
  strokeWidth: Number,
  pathClassName: String,
  width: Number,
  height: Number
})
</script>
