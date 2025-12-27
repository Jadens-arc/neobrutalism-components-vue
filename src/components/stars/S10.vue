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
      d="m100 5 4.75 86.773L182.272 52.5 109.5 100l72.772 47.5-77.522-39.273L100 195l-4.75-86.773L17.728 147.5 90.5 100 17.728 52.5 95.25 91.773z"
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
