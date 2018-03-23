<template>
	<div>
		<div>{{title}} ：</div>
		<el-input placeholder="请输入内容"></el-input>
	</div>
</template>

<script>
export default {
	name: 'bwu-input',
	props: ['title'],
	data() {
		return{

		}
	},
	methods: {
	},
	mounted() {

	}
}
</script>

<style scoped>
.motal-panel {
    position: absolute;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -45%);
    /* background-color: #4caaff;
    border-radius: 2px;
    border: solid 1px #4caaff; */
    overflow: hidden;
}

.motal-panel_head {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    padding-left: 5px;
}

.motal-close_btn {
    float: right;
    padding: 0 8px;
}

.motal-close_btn:hover {
    opacity: 0.7;
}

.motal-panel_foot {
    position: absolute;
    background-color: #ffffff;
    left: 0;
    bottom: 0;
    right: 0;
}

.motal-panel_body {
    height: 100%;
    width: 100%;
    background-color: #ffffff;
    position: relative;
    overflow: auto;
}

.el-tree {
    border: none;
}
</style>