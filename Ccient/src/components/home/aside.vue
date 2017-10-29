<template>
	<div class="aside md-h2">

		<el-tree :data="list" :props="defaultProps" accordion @node-click="$nodeClick"></el-tree>

		<div class="aside-information">
			<div class="aside-information-card md-h3">stable (v5.0.0-beta.4)</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'bwu-aside',
		props: ['list'],
		data() {
			return {
				data: [],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			$nodeClick,
		}
	}

	function $nodeClick(data){
		const _this = this;

		_this.$emit('nodeClick',data)
	}
</script>

<style scoped>

	.aside {
		padding-top: 64px;
		width: 260px;
		height: 100%;
		position: absolute;
		left: 0;top: 0;
		background-color: #ffffff;
		overflow: auto;
		/* padding-left: 12px; */
	}

	.aside-information{
		border-top: solid 1px rgb(219, 219, 219);
		padding: 12px
	}

	.aside-information-card{
		height: 48px;line-height: 48px;
		text-align: center;	
		cursor: default	;
		background-color: #FC624D;
		color: #ffffff;
	}

</style>

<style>
	/* Element UI Fix */
	.aside .el-tree{
		border: none;
		margin: 12px 0;
	}


	.aside .el-tree>.el-tree-node>.el-tree-node__content {
		height: 48px!important;line-height: 48px!important;
		background-color: #ffffff;
	}

	.aside .el-tree>.el-tree-node>.el-tree-node__content:hover {
		background-color: #3f4749;
		color: #ffffff
	}

	
	.aside .el-tree>.el-tree-node>.el-tree-node__content .el-tree-node__label{
		font-size: 16px!important;
		color: #4B4B4B;
	} 

	.aside .el-tree>.el-tree-node>.el-tree-node__content .el-tree-node__expand-icon{
		font-size: 16px!important;
		float: right; 
		margin-top: 18px;margin-right: 18px;
	} 

	.aside  .el-tree-node__expand-icon{
		font-size: 16px!important;
		float: right; 
		margin-top: 12px;margin-right: 18px;
	}
	
	.aside .el-tree-node__label{
		color: #7A7A7A;
		padding-left: 24px
	} 

	.aside .el-tree-node__content {
		background-color: #F5F5F5;
	}

	.aside .el-tree-node__content:hover{
		background-color: #60737a!important;
	}

	.aside .el-tree-node__content:hover  .el-tree-node__label{
		color: #ffffff!important;
	}
</style>