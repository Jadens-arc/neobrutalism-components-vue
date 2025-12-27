<template>
  <div class="space-y-8">
    <h1 class="text-4xl font-heading mb-8">Star Components</h1>
    <p class="text-lg font-base mb-8">40 unique star SVG components for adding visual flair to your designs.</p>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
      <div v-for="n in 40" :key="n" class="flex flex-col items-center gap-2">
        <div class="w-16 h-16 flex items-center justify-center border-2 border-border rounded-base bg-secondary-background">
          <component :is="getStarComponent(n)" :size="40" />
        </div>
        <span class="text-sm font-base">S{{ n }}</span>
      </div>
    </div>

    <section class="space-y-4 mt-12">
      <h2 class="text-3xl font-heading">Star Variations</h2>
      <p class="font-base">Each star has customizable size, color, and styling properties.</p>
      
      <div class="flex flex-wrap gap-8 items-center">
        <S1 :size="60" color="oklch(67.47% 0.1725 259.61)" />
        <S5 :size="80" color="oklch(67.28% 0.2147 24.22)" />
        <S10 :size="100" color="oklch(86.03% 0.176 92.36)" />
        <S15 :size="60" color="oklch(79.76% 0.2044 153.08)" />
        <S20 :size="80" color="oklch(66.34% 0.1806 277.2)" />
        <S25 :size="100" color="oklch(67.47% 0.1725 259.61)" />
        <S30 :size="60" color="oklch(67.28% 0.2147 24.22)" />
        <S35 :size="80" color="oklch(86.03% 0.176 92.36)" />
      </div>
    </section>

    <section class="space-y-4 mt-12">
      <h2 class="text-3xl font-heading">Usage Example</h2>
      <div class="bg-secondary-background border-2 border-border rounded-base p-6">
        <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;S1 :size="60" color="#ff0000" /&gt;
  &lt;S15 :size="80" /&gt;
  &lt;S25 :size="100" color="oklch(67.47% 0.1725 259.61)" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import S1 from '@/components/stars/S1.vue'
import S15 from '@/components/stars/S15.vue'
import S25 from '@/components/stars/S25.vue'
&lt;/script&gt;</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import S1 from '@/components/stars/S1.vue'
import S5 from '@/components/stars/S5.vue'
import S10 from '@/components/stars/S10.vue'
import S15 from '@/components/stars/S15.vue'
import S20 from '@/components/stars/S20.vue'
import S25 from '@/components/stars/S25.vue'
import S30 from '@/components/stars/S30.vue'
import S35 from '@/components/stars/S35.vue'

const getStarComponent = (n) => {
  return defineAsyncComponent(() => import(`@/components/stars/S${n}.vue`))
}
</script>
