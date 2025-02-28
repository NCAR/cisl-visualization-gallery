import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

export default defineConfig({
    site: 'https://visualizations.ucar.edu',
    base: '/',
    integrations: [ 
    pagefind()]
});
