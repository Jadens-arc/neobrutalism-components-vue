<template>
  <div class="space-y-8">
    <section class="text-center py-12">
      <h1 class="text-6xl font-heading mb-4">Neobrutalism Components</h1>
      <p class="text-xl font-base mb-8">A Vue 3 component library with bold, brutalist design</p>
      
      <div class="flex gap-4 justify-center">
        <Button as="a" href="https://github.com/yourusername/neobrutalism-components-vue" size="lg">
          Get Started
        </Button>
        <Button variant="neutral" as="router-link" to="/components" size="lg">
          View Components
        </Button>
      </div>
    </section>

    <section class="grid md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Bold Design</CardTitle>
          <CardDescription>Thick borders and offset shadows for a striking appearance</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Every component features the signature neobrutalism aesthetic with 2px black borders and flat 4px shadows.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>46+ Components</CardTitle>
          <CardDescription>Complete UI library for modern applications</CardDescription>
        </CardHeader>
        <CardContent>
          <p>From buttons and inputs to complex components like sidebars, carousels, and data tables.</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vue 3 Ready</CardTitle>
          <CardDescription>Built with Composition API and script setup</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Fully compatible with Vue 3, using modern patterns and best practices.</p>
        </CardContent>
      </Card>
    </section>

    <section class="py-12">
      <h2 class="text-4xl font-heading mb-6 text-center">Quick Example</h2>
      
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="space-y-4">
          <Alert>
            <AlertTitle>Example Alert</AlertTitle>
            <AlertDescription>
              This is how the neobrutalism design looks in action.
            </AlertDescription>
          </Alert>

          <div class="flex gap-4">
            <Button>Default Button</Button>
            <Button variant="neutral">Neutral</Button>
            <Button variant="noShadow">No Shadow</Button>
          </div>

          <div class="flex items-center gap-4">
            <Checkbox id="terms" />
            <Label for="terms">Accept terms and conditions</Label>
          </div>

          <Input placeholder="Type something..." />
        </div>

        <div class="bg-secondary-background border-2 border-border rounded-base p-6">
          <pre class="text-sm overflow-x-auto"><code>&lt;template&gt;
  &lt;Button&gt;Click me&lt;/Button&gt;
  
  &lt;Card&gt;
    &lt;CardHeader&gt;
      &lt;CardTitle&gt;Title&lt;/CardTitle&gt;
    &lt;/CardHeader&gt;
    &lt;CardContent&gt;
      Content goes here
    &lt;/CardContent&gt;
  &lt;/Card&gt;
&lt;/template&gt;

&lt;script setup&gt;
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Alert from '@/components/ui/Alert.vue'
import AlertTitle from '@/components/ui/AlertTitle.vue'
import AlertDescription from '@/components/ui/AlertDescription.vue'
import Checkbox from '@/components/ui/Checkbox.vue'
import Label from '@/components/ui/Label.vue'
import Input from '@/components/ui/Input.vue'
</script>
