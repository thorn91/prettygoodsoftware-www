import { defineConfig } from 'astro/config';

// Apex domain, so no `base` — the site serves from the root.
// No Tailwind here on purpose: this page is one bespoke layout, and the
// design is carried by a small set of named custom properties rather than
// utility classes.
export default defineConfig({
  site: 'https://prettygoodsoftware.llc',
});
