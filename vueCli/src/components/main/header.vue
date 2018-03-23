<template>
	<div class="header">
		<div class='module-container'>
			<div :class="item.nid==active?'module-btn active':'module-btn'" v-for='(item,index) in module'>
				<div :class="'module-icon iconfont '+item.icon"></div>
				<div class="module-text">{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bwu-header',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				module: [{
					name: '门户首页', icon: 'icons-home', nid: '1'
				}, {
					name: '资产平台', icon: 'icons-attachmoney', nid: '2'
				}, {
					name: '数据管理', icon: 'icons-desktopwindows', nid: '3'
				}],
				active: '3'
			}
		}
	}

</script>

<style scoped>
	.header {
		height: 160px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
	}

	.module-container {
		height: 72px;
		float: right;
		margin: 0 18px 0 0;
		padding:  0 12px;
	}

	.module-container .module-btn {
		float: left;
		height: 80px;
		width: 84px;
		margin: 0 6px;
		cursor: pointer;
	}


	.module-container .module-btn.active {
		background-color: #1190ff;
	}

	
	.module-container .module-btn.active *{
		text-shadow: 0 4px 5px  rgba(0,0,0,0.3);
	}

	.module-container .module-icon {
		height: 52px;
		width: 84px;
		text-align: center;
		line-height: 64px;
		font-size: 36px;
		color: #fff;
	}

	.module-container .module-text {
		height: 24px;
		width: 84px;
		text-align: center;
		line-height: 24px;
		font-size: 14px;
		color: #fff
	}
</style>