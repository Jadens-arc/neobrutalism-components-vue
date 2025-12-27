# Example Project - Neobrutalism Components Vue

This is a test project demonstrating the usage of the `neobrutalism-components-vue` library.

## Running the Example

```bash
npm run dev
```

Then open your browser to the URL shown (usually http://localhost:5173)

## What's Included

This example demonstrates:

- **Buttons** - Various button variants (default, neutral, reverse, no shadow, with icons)
- **Form Elements** - Inputs, labels, checkboxes, and switches
- **Cards** - Card components with headers, content, and footers
- **Alerts** - Default and destructive alert variants
- **Badges** - Different badge styles
- **Tabs** - Tabbed content navigation
- **Stars** - Decorative star components (S1, S2, S3)

## Project Structure

- `src/App.vue` - Main component showcasing all the library components
- `src/style.css` - Global styles with Tailwind CSS v4 and neobrutalism theme
- `tailwind.config.js` - Tailwind configuration matching the library theme
- `postcss.config.js` - PostCSS configuration for Tailwind v4

## Making Changes to the Library

1. Make changes in the parent library directory
2. Rebuild the library: `cd .. && npm run build`
3. The changes will be automatically reflected in this example (via npm link)
4. Refresh your browser to see the updates

## Notes

- This project uses `npm link` to test the library locally before publishing
- All peer dependencies are installed and configured
- Tailwind CSS v4 is configured with the neobrutalism theme
