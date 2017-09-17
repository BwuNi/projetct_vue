<template>
	<div id="app" data-sideOpen=true>
		<bwu-aside></bwu-aside>
		<bwu-header></bwu-header>

		<div class="page-container">
			<h2 class="page-title">Title</h2>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import Header from './components/home/header.vue'
	import Aside from './components/home/aside.vue'

	export default {
		name: 'app',
		components: {
			'bwu-header': Header,
			'bwu-aside': Aside
		}
	}

</script>

<style>

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#app[data-sideOpen=true] {
		padding-left: 260px;
	}

	.page-title{
		height: 64px;line-height: 72px;
		padding-left: 48px;
		font-size: 24px;
		position: absolute;
		top: 0;left: 0;
	}

	.page-container {
		position: relative;
		height: 100%;
		width: 100%;
		padding:64px 24px 24px 24px;
		overflow: auto;
	}

</style>