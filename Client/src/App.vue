<template>
	<div id="app" data-sideOpen=true>
		<bwu-aside :list='listData' @nodeClick='$nodeClick'></bwu-aside>
		<bwu-header></bwu-header>

		<div class="page-container">
			<h2 class="page-title md-h4">Title</h2>
			<router-view></router-view>
		</div>

		<transition name="fade">
			<bwu-login v-if='showLogin' @login='$login'></bwu-login>
		</transition>

	</div>
</template>

<script>
	import Header from './components/home/header.vue'
	import Aside from './components/home/aside.vue'
	import Login from './components/home/login.vue'

	export default {
		name: 'app',
		components: {
			'bwu-header': Header,
			'bwu-aside': Aside,
			'bwu-login': Login,
		},
		data() {
			return {
				showLogin: true,
				listData:[{
					label: 'Hello',
					children: [{
						label: 'Vue',
						children: [{
							label: 'Hello Vue',
							url:'/hello'
						}]
					}]
				}, {
					label: 'Pages',
					children: [{
						label: 'Blank_page',
						children: [{
							label: 'Page_1',
							url:'/page_1'
						}]
					}, {
						label: 'Filled_page',
						children: [{
							label: 'Page_2',
							url:'/page_2'
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
		data.url ? changePage(_this,data.url) : ''
	}


	function changePage(_this,url) {
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

	.page-title {
		height: 48px;
		line-height: 48px;
		padding: 0 12px;
		font-size: 24px;
		position: fixed;
		top: 76px;
		left: 272px;
		cursor: default;
		transition: ease 0.2s all;

		background-color: rgb(103, 134, 145);
		color: #fff;
	}


	.page-title:hover {
		background-color: rgb(76, 93, 99);
	}

	.page-container {
		position: relative;
		height: 100%;
		width: 100%;
		padding: 70px 24px 24px 24px;
		overflow: auto;
	}
</style>