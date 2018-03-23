<template>
	<div class="aside">
		<div style="height:96px"></div>
		<el-tree :data="list" :props="defaultProps" accordion @node-click="$nodeClick"></el-tree>
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
					label: 'title'
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
		background-color: rgb(248,248,248);
		overflow: auto;
		/* padding-left: 12px; */
	}

	.aside-information{
		border-top: solid 1px rgb(219, 219, 219);
		padding: 12px
	}

</style>

<style>
	/* Element UI Fix */
	.aside .el-tree{
		border: none;
		margin: 12px 0;
	}


	.aside .el-tree>.el-tree-node>.el-tree-node__content {
		height: 36px!important;line-height: 36px!important;
		background-color: rgb(248,248,248);
	}

	.aside .el-tree>.el-tree-node>.el-tree-node__content:hover {
		background-color: #3f4749;
		color: rgb(248,248,248)
	}

	.aside .el-tree>.el-tree-node>.el-tree-node__content .el-tree-node__label{
		font-size: 14px!important;
		color: #4B4B4B;
	} 


	
	.aside .el-tree-node__label{
		color: #7A7A7A;
		padding-left: 24px
	} 

	.aside .el-tree-node__content {
		background-color: #fff;
	}

	.aside .el-tree-node__content:hover{
		background-color: #60737a!important;
	}

	.aside .el-tree-node__content:hover  .el-tree-node__label{
		color: rgb(248,248,248)!important;
	}
</style>