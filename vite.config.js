import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yaswanth_portfolio_singlepage/',  // <-- Add this line
});
