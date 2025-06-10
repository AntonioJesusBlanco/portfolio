import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel'; // o "vercel/edge" si prefieres

export default defineConfig({
  output: 'server', // importante para que funcione con Vercel Serverless
  adapter: vercel(),
});
