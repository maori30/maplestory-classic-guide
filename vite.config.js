import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Ensures assets load properly with file:// protocol in Electron & Desktop apps
  plugins: [react()],
});

