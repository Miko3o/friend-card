import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

dotenv.config({ path: resolve(__dirname, '.env')})


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
