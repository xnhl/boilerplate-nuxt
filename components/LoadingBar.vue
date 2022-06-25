<template>
  <div v-if="loading" id="loader">
		<vue-loaders name="ball-clip-rotate-multiple" :color="color" scale="3" />
  </div>
</template>

<script>
  export default {
		data: () => ({ loading: false }),
		computed: {
			color() { return this.$nuxt.$colorMode.preference == "light" ? "rgba(0, 0, 0, 0.66)" : "rgba(255, 255, 255, 0.66)" }
		},
    methods: {
      start() { this.loading = true },
			finish() { this.loading = false }
		}
  }
</script>

<style scoped lang="sass">
#loader
	position: fixed
	top: 0
	right: 0
	z-index: 500
	height: 95vh
	width: 100vw
	@include flexCenter
</style>
