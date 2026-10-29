import { defineConfig } from "vite-plus";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },

  staged: {
    "*": "vp check --fix",
  },
});
