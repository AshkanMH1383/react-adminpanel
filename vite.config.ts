import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    server: {
        host: true,
        watch: {
            usePolling: true,
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
})
