# Testing the Library Locally

The library has been successfully configured and built! Here's how to test it in another Vue project:

## Step 1: Link is Already Created

The library is now globally linked via `npm link`. You can verify by running:

```bash
npm list -g --depth=0 | grep neobrutalism-components-vue
```

## Step 2: Use in Another Vue Project

In your test Vue project, run:

```bash
npm link neobrutalism-components-vue
```

## Step 3: Import and Use Components

### Install Required Dependencies

Your test project needs these peer dependencies:

```bash
npm install radix-vue @vueuse/core class-variance-authority clsx tailwind-merge lucide-vue-next date-fns vue-sonner v-calendar embla-carousel-vue vaul-vue vue3-otp-input
```

### Import Global Styles

In your main.js:

```javascript
import { createApp } from 'vue'
import App from './App.vue'

// Import the component library styles
import 'neobrutalism-components-vue/style.css'

createApp(App).mount('#app')
```

### Use Individual Components

```vue
<script setup>
import { Button, Card, CardHeader, CardTitle, CardContent } from 'neobrutalism-components-vue'
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Hello World</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Click me!</Button>
    </CardContent>
  </Card>
</template>
```

### Configure Tailwind CSS

Your test project needs Tailwind CSS v4 configured. Create/update these files:

**tailwind.config.js:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/neobrutalism-components-vue/**/*.{vue,js}"
  ],
  // Add the same theme configuration from neobrutalism-components
}
```

**postcss.config.js:**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

**src/assets/main.css** (or your global CSS file):
```css
@import "tailwindcss";

:root {
  --border-radius: 5px;
  --box-shadow-x: 4px;
  --box-shadow-y: 4px;
  --reverse-box-shadow-x: -4px;
  --reverse-box-shadow-y: -4px;

  --heading-font-weight: 700;
  --base-font-weight: 500;

  --background: oklch(93.46% 0.0304 254.32);
  --secondary-background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
  --main-foreground: oklch(0% 0 0);
  --main: oklch(67.47% 0.1725 259.61);
  --border: oklch(0% 0 0);
  --ring: oklch(0% 0 0);
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0px 0px var(--border);
}

@theme inline {
  --color-main: var(--main);
  --color-background: var(--background);
  --color-secondary-background: var(--secondary-background);
  --color-foreground: var(--foreground);
  --color-main-foreground: var(--main-foreground);
  --color-border: var(--border);
  --radius-base: var(--border-radius);
  --shadow-shadow: var(--shadow);
  --font-weight-base: var(--base-font-weight);
  --font-weight-heading: var(--heading-font-weight);
}
```

## Step 4: Making Changes

When you make changes to the library:

1. Rebuild the library:
   ```bash
   cd /Users/jaden/Desktop/Repositories/neobrutalism-components
   npm run build
   ```

2. Your linked project will automatically use the updated version

## Step 5: Unlink When Done Testing

In your test project:
```bash
npm unlink neobrutalism-components-vue
npm install
```

In the library project:
```bash
npm unlink -g
```

## Publishing to npm

When you're ready to publish:

1. Update package.json with your repository URL and author info
2. Create an npm account if you don't have one
3. Login: `npm login`
4. Publish: `npm publish`

For scoped packages (recommended to avoid naming conflicts):
```bash
# Change name in package.json to @yourusername/neobrutalism-components-vue
npm publish --access public
```

## Available Components

All UI components, Stars components, and utilities are exported. See `src/index.js` for the full list of available exports.
