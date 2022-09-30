// vite.config.js
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
  plugins: [
    handlebars({
      compileOptions: {
        preventIndent: true,
      },
      partialDirectory: resolve(__dirname, 'includes'),
    })
  ],
};
