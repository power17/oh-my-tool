import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src/'),
      },
    ],
  },
  plugins: [react()],
  // server: {
  //   open: true,
  //   host: true,
  //   port: 5173,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //   },
  // },
});
