export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        'secondary-background': 'var(--secondary-background)',
        foreground: 'var(--foreground)',
        main: 'var(--main)',
        'main-foreground': 'var(--main-foreground)',
        'secondary-foreground': 'var(--secondary-foreground)',
      },
      borderRadius: {
        base: 'var(--border-radius)',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      translate: {
        boxShadowX: 'var(--box-shadow-x)',
        boxShadowY: 'var(--box-shadow-y)',
        reverseBoxShadowX: 'var(--reverse-box-shadow-x)',
        reverseBoxShadowY: 'var(--reverse-box-shadow-y)',
      },
      fontWeight: {
        base: 'var(--base-font-weight)',
        heading: 'var(--heading-font-weight)',
      },
    },
  },
  plugins: [],
}
