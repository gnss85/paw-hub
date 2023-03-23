import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  assetsInclude: ["./assets/**/*.*"],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "adopt/index.html"),
      },
    },

    emptyOutDir: true,
    outDir: "../dist",
  },
});
