<template>
	<div id="app" data-sideOpen=true>
		<bwu-aside :list='listData' @nodeClick='$nodeClick'></bwu-aside>

		<bwu-header></bwu-header>

		<bwu-pageContainer></bwu-pageContainer>

		<transition name="fade">
			<bwu-login v-if='showLogin' @login='$login'></bwu-login>
		</transition>

		<!-- <transition name="fade">
			<bwu-loading v-if='showLoading' @unload='$unload'></bwu-loading>
		</transition> -->

	</div>
</template>

<script>
	import Header from './header.vue'
	import Loading from './loading.vue'
	import Aside from './aside.vue'
	import Login from './login.vue'
	import PageContainer from './page.container.vue'

	export default {
		name: 'bwu-home',
		components: {
			'bwu-header': Header,
			'bwu-aside': Aside,
			'bwu-login': Login,
			'bwu-loading': Loading,
			'bwu-pageContainer': PageContainer,
		},
		data() {
			return {
				showLogin: false,
				showLoading: false||this.$store.state.isLoading,
				listData: [{
					label: 'Hello',
					children: [{
						label: 'Vue',
						children: [{
							label: 'Hello Vue',
							url: '/hello'
						}]
					}]
				}, {
					label: 'Pages',
					children: [{
						label: 'Blank_page',
						children: [{
							label: 'Page_1',
							url: '/page_1'
						}]
					}, {
						label: 'Filled_page',
						children: [{
							label: 'Page_2',
							url: '/page_2'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
			}
		},
		methods: {
			$login,
			$nodeClick,
			$unload,
		}
	}

	function $login() {
		const _this = this
		_this.$data.showLogin = false
	}

	function $toTop() {

	}

	function $nodeClick(data) {
		const _this = this
		data.url ? changePage(_this, data.url) : ''
	}

	function $unload() {

	}


	function changePage(_this, url) {
		_this.$router.push(url)
	}

	function changeMod() {

	}

</script>

<style>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .5s
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	#app[data-sideOpen=true] {
		padding-left: 260px;
	}


</style>