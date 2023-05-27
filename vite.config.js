import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      fileName: "index",
      entry: "src/asserts-comparer.ts",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
