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
      d="M121 5C96.7 5 77 24.7 77 49v29H5c0 24.301 19.7 44 44 44h28v73c24.301 0 44-19.699 44-44v-29h74c0-24.3-19.699-44-44-44h-30z"
      clip-rule="evenodd"
      fill-rule="evenodd"
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
