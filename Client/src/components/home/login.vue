<template>
	<div class="mask">
		<form class="panel md-h6 ctnr">
			<div class="row">
				<h1 class="col-1_1">用户登陆</h1>
			</div>
			<div class="row">
				<label for="" class="col-4_1">用户名 ：</label>
				<div class="col-4_3">
					<el-input value='admin'></el-input>
				</div>
			</div>
			<div class="row">
				<label for="" class="col-4_1">密码 ：</label>
				<div class="col-4_3">
					<el-input value='admin' type='password'></el-input>
				</div>
			</div>
			<div class="row">

				<div class="off-8_2">
				</div>
				<div class="col-8_3">
					<el-button v-on:click="checkValue" type="primary" style="width:100%">登录</el-button>
				</div>
				<div class="col-8_3">
					<el-button style="width:100%" >取消</el-button>
				</div>
			</div>

		</form>
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
			initBackground(_this.$el)
		}
	}


	function initBackground(el) {
		let c = document.createElement('canvas')
		c.style.height = '100%'
		c.style.width = '100%'

		let the_canvas = Colorful(c)


		// document.onclick = the_canvas.render.bind(the_canvas)
		// document.ontouchstart = the_canvas.render.bind(the_canvas)

		the_canvas.render()

		el.appendChild(c)
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
		background-color: #ffffff;
		z-index: 999;
	}

	.panel {
		position: absolute;
		left: 50%;
		top: 40%;
		width: 400px;
		transform: translate(-50%, -40%);
		z-index: 999;
		background-color: #ffffff;
	}
</style>