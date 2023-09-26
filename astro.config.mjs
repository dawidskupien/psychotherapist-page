import { defineConfig } from 'astro/config';
import sanityIntegration from '@sanity/astro';
import react from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: nodejs({
    mode: 'middleware',
  }),
  integrations: [react(), tailwind(
    {
      applyBaseStyles: false,
    }
  ), sanityIntegration(
    {
    projectId: "bkigp0ls",
    dataset: "production",
    apiVersion: "2021-03-25",
    useCdn: true,
    studioBasePath: "/admin",
  }
  )]
});