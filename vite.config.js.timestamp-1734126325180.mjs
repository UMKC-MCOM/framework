// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
var __vite_injected_original_dirname = "/Users/gamnbd/Sites/umkc";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    handlebars({
      compileOptions: {
        preventIndent: true
      },
      partialDirectory: resolve(__vite_injected_original_dirname, "includes")
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ2FtbmJkL1NpdGVzL3Vta2NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9nYW1uYmQvU2l0ZXMvdW1rYy92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ2FtbmJkL1NpdGVzL3Vta2Mvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcbmltcG9ydCBoYW5kbGViYXJzIGZyb20gJ3ZpdGUtcGx1Z2luLWhhbmRsZWJhcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnLi8nLFxuICBwbHVnaW5zOiBbXG4gICAgaGFuZGxlYmFycyh7XG4gICAgICBjb21waWxlT3B0aW9uczoge1xuICAgICAgICBwcmV2ZW50SW5kZW50OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHBhcnRpYWxEaXJlY3Rvcnk6IHJlc29sdmUoX19kaXJuYW1lLCAnaW5jbHVkZXMnKSxcbiAgICB9KVxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBQLFNBQVMsb0JBQW9CO0FBQ3ZSLFNBQVMsZUFBZTtBQUN4QixPQUFPLGdCQUFnQjtBQUZ2QixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxnQkFBZ0I7QUFBQSxRQUNkLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0Esa0JBQWtCLFFBQVEsa0NBQVcsVUFBVTtBQUFBLElBQ2pELENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
