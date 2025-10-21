import { defineConfig } from 'vite';
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  base: './',
  build: {
    sourcemap: false,
  },
  plugins: [
    handlebars({
      compileOptions: {
        preventIndent: true,
      },
      partialDirectory: resolve(__dirname, 'includes'),
    })
  ],
});
