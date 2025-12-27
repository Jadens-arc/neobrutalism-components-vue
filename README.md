# Neobrutalism Components Vue

A collection of neobrutalist UI components for Vue 3, built with Radix Vue and Tailwind CSS v4.

## Features

- 🎨 Neobrutalist design style with bold borders and shadows
- 🧩 40+ UI components
- ⭐ 40 decorative star components
- 🎯 Built with Radix Vue primitives
- 🌙 Dark mode support
- 📦 Tree-shakeable
- 🔧 Fully customizable with Tailwind CSS

## Installation

```bash
npm install neobrutalism-components-vue
```

### Peer Dependencies

Install the required peer dependencies:

```bash
npm install vue radix-vue @vueuse/core class-variance-authority clsx tailwind-merge lucide-vue-next date-fns vue-sonner v-calendar@^3.0.0 embla-carousel-vue vaul-vue vue3-otp-input
```

### Tailwind CSS Configuration

Install Tailwind CSS v4:

```bash
npm install -D tailwindcss@^4.0.0 @tailwindcss/postcss autoprefixer postcss
```

Configure PostCSS (`postcss.config.js`):

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

Create your global CSS file with the neobrutalism theme:

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
  --main: oklch(67.47% 0.1725 259.61);
  --border: oklch(0% 0 0);
  --shadow: var(--box-shadow-x) var(--box-shadow-y) 0px 0px var(--border);
}

@theme inline {
  --color-main: var(--main);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-border: var(--border);
  --radius-base: var(--border-radius);
  --shadow-shadow: var(--shadow);
  --font-weight-base: var(--base-font-weight);
  --font-weight-heading: var(--heading-font-weight);
}
```

## Usage

Import components in your Vue files:

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

## Available Components

### UI Components
- Accordion, Alert, AlertDialog, Avatar, Badge, Breadcrumb
- Button, Calendar, Card, Carousel, Checkbox, Collapsible
- Command, ContextMenu, Dialog, Drawer, DropdownMenu
- HoverCard, Input, InputOTP, Label, Marquee, Menubar
- NavigationMenu, Pagination, Popover, Progress, RadioGroup
- Resizable, ScrollArea, Select, Sheet, Sidebar, Skeleton
- Slider, Switch, Table, Tabs, Textarea, Tooltip

### Star Components
- S1 through S40 - Decorative star components

## Development

See the `example/` folder for a complete working example.

### Run the example:

```bash
cd example
npm install
npm run dev
```

## License

MIT

# Neobrutalism Components - Vue 3

A complete UI component library for Vue 3 featuring bold, brutalist design with thick borders, offset shadows, and high contrast colors.

## Features

- **46+ Components** - Complete set of UI components for modern applications
- **40 Star Icons** - Unique SVG star components for visual flair
- **Vue 3 & Composition API** - Built with modern Vue patterns using `<script setup>`
- **Tailwind CSS v4** - Customizable design system with CSS variables
- **Radix Vue** - Accessible primitives for complex components
- **Dark Mode** - Built-in theme switching support
- **No TypeScript** - Pure JavaScript for simplicity

## Design Philosophy

Neobrutalism is characterized by:
- **Bold 2px black borders** on all components
- **Flat offset shadows** (4px x 4px, no blur)
- **5px border radius** for slight softness
- **Heavy typography** (DM Sans: 700 for headings, 500 for body)
- **Interactive "press" effect** - elements move into their shadow on hover
- **OKLCH color space** for vibrant, perceptually uniform colors
- **High contrast** and accessibility-first design

## Installation

### Prerequisites

```bash
npm install vue@^3.4.0 vue-router@^4.2.0
```

### Dependencies

```bash
npm install radix-vue @vueuse/core class-variance-authority clsx tailwind-merge lucide-vue-next date-fns vue-sonner v-calendar embla-carousel-vue vaul-vue vue-resizable-panels vue3-otp-input
```

### Dev Dependencies

```bash
npm install -D @vitejs/plugin-vue vite tailwindcss autoprefixer postcss
```

## Quick Start

1. **Copy the component files** from `/vue/src/components/ui/` into your project
2. **Copy the utilities** from `/vue/src/lib/utils.js`
3. **Copy the composables** from `/vue/src/composables/`
4. **Copy the CSS** from `/vue/src/assets/css/globals.css`
5. **Configure Tailwind** using the provided `tailwind.config.js`

### Basic Usage

```vue
<template>
  <div>
    <Button>Click me</Button>
    
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
        <CardDescription>Welcome to neobrutalism design</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is a card with bold, brutalist styling.</p>
      </CardContent>
      <CardFooter>
        <Button variant="neutral">Learn More</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<script setup>
import Button from '@/components/ui/Button.vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardDescription from '@/components/ui/CardDescription.vue'
import CardContent from '@/components/ui/CardContent.vue'
import CardFooter from '@/components/ui/CardFooter.vue'
</script>
```

## Available Components

### Form Controls
- Button (4 variants: default, noShadow, neutral, reverse)
- Input, Textarea, Label
- Checkbox, RadioGroup, RadioGroupItem
- Switch, Slider
- Select (with SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton)
- InputOTP (with InputOTPGroup, InputOTPSlot, InputOTPSeparator)

### Layout
- Card (with CardHeader, CardTitle, CardDescription, CardContent, CardAction, CardFooter)
- Alert (with AlertTitle, AlertDescription)
- Accordion (with AccordionItem, AccordionTrigger, AccordionContent)
- Tabs (with TabsList, TabsTrigger, TabsContent)
- Collapsible (with CollapsibleTrigger, CollapsibleContent)
- Separator

### Navigation
- Breadcrumb (with BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis)
- NavigationMenu (with NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuViewport, NavigationMenuIndicator)
- Menubar (16 sub-components)
- Pagination (with PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis)
- Sidebar (24 sub-components for complex sidebar layouts)

### Overlays
- Dialog (with DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription)
- Sheet (10 sub-components, supports top/bottom/left/right)
- AlertDialog (11 sub-components)
- Drawer (10 sub-components using vaul-vue)
- Popover (with PopoverTrigger, PopoverContent)
- Tooltip (with TooltipProvider, TooltipTrigger, TooltipContent)
- HoverCard (with HoverCardTrigger, HoverCardContent)

### Menus
- DropdownMenu (15 sub-components)
- ContextMenu (15 sub-components)

### Data Display
- Table (with TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption)
- Avatar (with AvatarImage, AvatarFallback)
- Badge (2 variants: default, neutral)
- Skeleton
- Progress
- ScrollArea (with ScrollBar)
- Carousel (with CarouselContent, CarouselItem, CarouselPrevious, CarouselNext)
- ImageCard
- Marquee

### Complex Components
- Calendar (using v-calendar)
- Command (with CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut)
- Resizable (with ResizablePanelGroup, ResizablePanel, ResizableHandle)

### Star Components
- S1.vue through S40.vue - 40 unique star SVG components

## Customization

### Changing Colors

Edit `/vue/src/assets/css/globals.css`:

```css
:root {
  --main: oklch(67.47% 0.1725 259.61); /* Primary color */
  --background: oklch(93.46% 0.0304 254.32);
  --secondary-background: oklch(100% 0 0);
  --foreground: oklch(0% 0 0);
}
```

### Color Presets

The library supports 17 color themes:
- red, orange, amber, yellow, lime, green, emerald, teal, cyan
- sky, blue, indigo, violet, purple, fuchsia, pink, rose

### Customizing Shadows

```css
:root {
  --box-shadow-x: 4px;  /* Horizontal offset */
  --box-shadow-y: 4px;  /* Vertical offset */
  --border-radius: 5px;
}
```

## Component Variants

### Button Variants

```vue
<Button>Default</Button>
<Button variant="noShadow">No Shadow</Button>
<Button variant="neutral">Neutral</Button>
<Button variant="reverse">Reverse Shadow</Button>
```

### Button Sizes

```vue
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon Only</Button>
```

## Dark Mode

The library includes built-in dark mode support:

```vue
<script setup>
import { useTheme } from '@/composables/useTheme'

const { theme, setTheme, toggleTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme">
    {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
  </button>
</template>
```

## Composables

### useMobile

Detects if viewport is mobile (< 768px):

```vue
<script setup>
import { useMobile } from '@/composables/useMobile'

const isMobile = useMobile()
</script>
```

### useTheme

Manages theme state:

```vue
<script setup>
import { useTheme } from '@/composables/useTheme'

const { theme, setTheme, toggleTheme } = useTheme()
</script>
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
vue/
├── src/
│   ├── components/
│   │   ├── ui/          # All 46+ UI components
│   │   └── stars/       # 40 star SVG components
│   ├── composables/     # Vue composables (useMobile, useTheme)
│   ├── lib/             # Utilities (cn, string transforms)
│   ├── assets/
│   │   └── css/         # Global styles with design tokens
│   ├── views/           # Example pages
│   ├── router/          # Vue Router config
│   ├── App.vue          # Root component
│   └── main.js          # App entry point
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Original React version: [neobrutalism-components](https://github.com/ekmas/neobrutalism-components)
- Design inspiration: Brutalist architecture and web design movement
- Built with [Vue 3](https://vuejs.org/), [Radix Vue](https://www.radix-vue.com/), and [Tailwind CSS](https://tailwindcss.com/)

## License

MIT License - Feel free to use in your projects!

## Contributing

Contributions are welcome! This is a Vue 3 port of the original React library. Please maintain the neobrutalism design aesthetic when adding new components.

## Support

For issues or questions:
- Check the example pages in `/src/views/`
- Review component source code in `/src/components/ui/`
- Refer to [Radix Vue documentation](https://www.radix-vue.com/) for component APIs
