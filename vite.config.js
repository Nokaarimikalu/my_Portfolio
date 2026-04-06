import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Prüft alle 100ms auf Änderungen
    },
    hmr: {
      overlay: true, // Zeigt Fehler direkt im Browser an
    },
  },
})