import sveltePreprocess from 'svelte-preprocess';
import adapt from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		target: '#svelte',
		adapter: adapt(),
	}
};

export default config;
