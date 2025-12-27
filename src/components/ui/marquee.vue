<script setup>
defineOptions({
  name: 'Marquee'
})

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground font-base">
    <div class="animate-marquee whitespace-nowrap py-12">
      <span
        v-for="item in items"
        :key="item"
        class="mx-4 text-4xl"
      >
        {{ item }}
      </span>
    </div>

    <div class="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
      <span
        v-for="item in items"
        :key="item"
        class="mx-4 text-4xl"
      >
        {{ item }}
      </span>
    </div>

    <!-- must have both of these in order to work -->
  </div>
</template>
