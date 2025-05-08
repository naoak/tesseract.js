import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-www",
    chunkSizeWarningLimit: 1024
  },
  server: {
    watch: {
      usePolling: true
    }
  }
});
