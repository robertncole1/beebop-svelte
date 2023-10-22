import adapterStatic from '@sveltejs/adapter-static';
import adapterNode from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

const adapter = process.env.ADAPTER === 'node' ? adapterNode : adapterStatic;
const adapterConfig =
	process.env.ADAPTER === 'node'
		? {
				out: 'build-node'
		  }
		: {
				fallback: 'index.html',
				pages: 'build-static',
				assets: 'build-static'
		  };


const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(adapterConfig)
	}
};

export default config;