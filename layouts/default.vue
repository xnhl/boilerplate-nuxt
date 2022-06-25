<template>
	<div>
		<nuxt />
	</div>
</template>

<script>
export default {
	transition: {
		name: 'fade',
		duration: 100
	},
	head() {
		return {
			title: 'Title',
			meta: [
				{
					charset: 'utf-8'
				},
				{
					name: 'viewport', 
					content: 'width=device-width, initial-scale=1'
				},
				{
					hid: 'description',
					name: 'description',
					content: 'Description'
				}
			]
		}
	}
}
</script>


<style lang="sass">
@keyframes fadeIn
	0%
		opacity: 0
	100%
		opacity: 1
.hide
	display: none !important
@font-face
	font-family: 'Open Sans'
	src: url('/fonts/OpenSans-Regular.ttf') format('truetype')
	font-weight: normal
	font-style: normal
html
	font-family: 'Open Sans', 'Roboto', sans-serif
	font-size: 14px
	-ms-text-size-adjust: 100%
	-webkit-text-size-adjust: 100%
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	box-sizing: border-box
.light-mode body
	background: white
	color: black
.dark-mode body
	background: black
	color: white
*,
*:before,
*:after
	box-sizing: border-box
	padding: 0
	margin: 0
.page-enter-active, .page-leave-active
	transition: opacity 0.1s
.page-enter, .page-leave-to
	transition: opacity 0.1s
	opacity: 0
.fade-in
	animation: fadeIn 0.1s ease-in-out
</style>
