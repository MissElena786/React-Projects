import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix : "REACT_APP_",
  plugins: [
    react(),
    envCompatible
  ],
  define:{
    // env variables from .env File
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    'process.env.API_ID': JSON.stringify(process.env.API_ID)
  }
})
