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
      d="M90.5 5h19v78.546l68.022-39.273 9.5 16.454L119 100l68.022 39.273-9.5 16.454-68.022-39.273V195h-19v-78.546l-68.023 39.273-9.5-16.454L81 100 12.977 60.727l9.5-16.454L90.5 83.546z"
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
