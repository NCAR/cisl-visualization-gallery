import { defineConfig } from 'astro/config';
// import partytown from '@astrojs/partytown';
import pagefind from "astro-pagefind";

export default defineConfig({
    site: 'https://visualizations.ucar.edu',
    base: '/',
    integrations: [ 
    //   partytown({
    //     config: {
    //       forward: ["dataLayer.push"],
    //     }
    // }), 
    pagefind()]
});
