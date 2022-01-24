import {defineConfig} from 'vite';
import path from 'path';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

module.exports = defineConfig({
    plugins: [
        svelte({
            preprocess: [sveltePreprocess({
                typescript: true
            })],
        })
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'vite-typescript-component',
            fileName: (format) => `vite-typescript-component.${format}.js`
        },
    }
})