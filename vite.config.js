import handlebars from 'vite-plugin-handlebars';
const path = require('path');
const { resolve } = require('path');
const { defineConfig } = require('vite');
const outDir = resolve(__dirname, 'dist');
module.exports = defineConfig({
	root: __dirname,
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				about: resolve(__dirname, 'about.html'),
				contact: resolve(__dirname, 'contact.html'),
				offers: resolve(__dirname, 'offers.html'),
			},
		},
	},
	plugins: [
		handlebars({
			partialDirectory: path.join(process.cwd(), 'src/partials'),
		}),
	],
});
