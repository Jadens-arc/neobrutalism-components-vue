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
      d="m100 5 14.542 59.893 52.633-32.068-32.068 52.633L195 100l-59.893 14.542 32.068 52.633-52.633-32.068L100 195l-14.542-59.893-52.633 32.068 32.068-52.633L5 100l59.893-14.542-32.068-52.633 52.633 32.068z"
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
