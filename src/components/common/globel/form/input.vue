<template>
	<div>
		<div>{{title}} ：</div>
		<el-input :placeholder="placeholder?placeholder:'请输入内容'" :type='type'></el-input>
	</div>
</template>

<script>
export default {
	name: 'bwu-input',
	props: ['title','type','placeholder'],
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
</style>