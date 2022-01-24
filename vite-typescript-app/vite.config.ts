import {defineConfig} from 'vite';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

module.exports = defineConfig({
    plugins: [
        svelte({
            preprocess: [sveltePreprocess({
                typescript: true
            })],
        })
    ]
})