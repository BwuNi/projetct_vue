<template>
	<div class="load-container load4 mask">
		<div class="loader"></div>
	</div>
</template>

<script>
	import Colorful from '../../utils/view/ColorfulBand.js'
	import Ajax from '../../utils/common/Ajax.js'

	export default {
		name: 'bwu-login',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods:{
			checkValue
		},
		mounted: function () {
			const _this = this
		}
	}

	function checkValue(uname,ucode){
		const _this = this

		Ajax({type:"GET",url:"http://127.0.0.1:8081/api/user"})
		.then(
			(success)=>{
			console.log(success)
			console.log(_this)
			_this.$emit('login')
		}).catch(
			(error)=>{
				alert("Error")
		})
	}

	function succ(){

	}

	function erro(){
	}

</script>

<style scoped>
	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #0dc5c1;
		z-index: 1000;
		opacity: 0.7;
	}

	.mask .loader{
		position: absolute;
		left: 50%;top: 30%;
		transform: translate(-50%, -50%)
	}
</style>