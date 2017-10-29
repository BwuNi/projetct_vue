<template>
	<div class="page_container">
		<h2 class="page-title md-h4">Title</h2>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'bwu-pageContainer',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<style scoped>

.page_container {
		position: relative;
		height: 100%;
		width: 100%;
		padding: 70px 24px 24px 24px;
		overflow: auto;
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
</style>