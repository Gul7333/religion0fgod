import { createPreset } from 'fumadocs-ui/tailwind-plugin';
 
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  presets: [
    createPreset({
      preset: 'ocean',
    }),
  ],
  content: [
    './node_modules/fumadocs-ui/dist/**/*.js',
 
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.mdx',
    './mdx-components.tsx',
  ],
};

