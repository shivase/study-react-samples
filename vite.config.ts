import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import path from 'path';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  base: process.env.GITHUB_PAGES ? 'samples-react-mui-tailwindcss' : './',
  build: {
    sourcemap: true,
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
        },
      },
    },
  },
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'public'),
    },
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    process.env.NODE_ENV === 'production' && viteCompression(),
  ],
});
