import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), visualizer({ open: true })],
  build: {
    rollupOptions: {
      output: {
        // Fungsi buat mecah library di node_modules jadi file terpisah
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
    // Opsional: naikin limit dikit biar gak gampang muncul warning kuning
    chunkSizeWarningLimit: 1000,
  },
});
