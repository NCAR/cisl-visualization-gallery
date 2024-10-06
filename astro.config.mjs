import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import pagefind from "astro-pagefind";

export default defineConfig({
    site: 'https://tammyzhang-1.github.io',
    base: '/cisl-visualization-gallery',
    integrations: [ partytown({
        config: {
          forward: ["dataLayer.push"],
        }
    }), pagefind()]
});
