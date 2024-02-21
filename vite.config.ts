import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [react(), eslint({ cache: false })],
        server: {
            port: 3000
        },
        define: {
            __APP_ENV__: loadEnv(mode, process.cwd(), '')
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@components': path.resolve(__dirname, './src/components'),
                '@contexts': path.resolve(__dirname, './src/contexts'),
                '@hooks': path.resolve(__dirname, './src/hooks'),
                '@lib': path.resolve(__dirname, './src/lib'),
                '@pages': path.resolve(__dirname, './src/pages'),
                '@utils': path.resolve(__dirname, './src/utils')
            }
        }
    };
});
