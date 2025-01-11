import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3005,
  },
  // Make Vite load env variables
  envDir: '.',
  envPrefix: 'VITE_'
});
