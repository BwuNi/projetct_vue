<template>
	<div class="header md-h2">

		<div class="logo"></div>

		<nav class="nav"></nav>
		
		<div class="user">
			<el-dropdown trigger="click" :hide-on-click="true">
				<span class="el-dropdown-link">
					<div class="user-face"><i class="icon iconfont el-icon-vue-accountcircle"></i></div>
					<div class="user-name">Bwuning</div>
					<div class="user-dropdown"><i class="el-icon-caret-bottom el-icon--right"></i></div>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>站内消息</el-dropdown-item>
					<el-dropdown-item>系统通知</el-dropdown-item>
					<el-dropdown-item disabled>历史记录</el-dropdown-item>
					<el-dropdown-item divided>个人信息</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bwu-header',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}

</script>

<style scoped>
	.header {
		height: 64px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		background-color: #ffffff;
	}

	.logo {
		height: 64px;
		width: 260px;
		position: absolute;
		left: 0;
		top: 0;
		background-image: url(../../assets/img/home/logo/logo.png);
	}

	.user {
		height: 64px;
		line-height: 64px;
		width: 260px;
		position: absolute;
		right: 0;
		top: 0;
	}

	.el-dropdown-link{
		height: 64px;line-height: 64px;
		display: block;
		cursor: default;
	}

	.el-dropdown-link:hover{
		background-color: #efefef;
	}

	.el-dropdown-link div{
		float: left;
		height: 64px;line-height: 64px;
		padding: 0 4px
	}

	.el-dropdown-link div:first-child{
		padding-left: 24px
	}

	.el-dropdown-link div:last-child{
		padding-right: 24px
	}

	.el-dropdown-link .iconfont {
		line-height: 64px;
		font-size: 36px
	}

	.el-dropdown-link .user-name {
		font-size: 18px
	}
</style>