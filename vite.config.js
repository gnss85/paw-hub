import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  assetsInclude: ["./assets/**/*.*"],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname + "/src", "index.html"),
        adopt: resolve(__dirname + "/src", "adopt/index.html"),
      },
    },

    emptyOutDir: true,
    outDir: "../dist",
  },
});
