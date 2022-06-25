export default {
	target: 'static',
	components: true,
	generate: { routes: ["/"] },
	loading: '~/components/LoadingBar.vue',
	plugins: [ '~/plugins/vue-loaders.js' ],
	styleResources: { sass: [ './assets/*.sass' ] },
  css: [ "~/node_modules/vue-loaders/dist/vue-loaders.css" ],
  modules: [
		'@nuxtjs/color-mode',
		'@nuxtjs/style-resources'
	],
	colorMode: {
		preference: 'light',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '-mode',
		storageKey: 'nuxt-color-mode'
	},
  build: {
    extend (config, ctx) {},
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: { autoprefixer: { grid: true } }
      }
    }
  }
}
