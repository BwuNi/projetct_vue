<template>
	<div class="mask">
		<form class="panel">
			<input type='text' placeholder="用户名"></input>
			<input type='password' placeholder="密码"></input>
			<button @click="checkValue" type="button" class="btn">登录</button>

		</form>
	</div>
</template>

<script>
	import Colorful from '../../utils/view/ColorfulBand.js'
	import ajax from '../../utils/common/ajax.js'

	export default {
		name: 'bwu-login',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods: {
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

	function checkValue(uname, ucode) {
		const _this = this

		ajax.get("http://127.0.0.1:8081/api/user")
			.then(
			(success) => {
				_this.$emit('login')
			}).catch(
			(error) => {
				alert("Error")
			})
	}

	function succ() {

	}

	function err() {
	}

</script>

<style scoped>
	.mask {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #FDFDFD;
		z-index: 999;
	}


	.btn{
		position: absolute;
		width: 100%;
		height: 48px;
		bottom: -72px;left:0;right: 0;
		border:none;
		background: aqua;
		color:#fff;
		border-radius: 4px;
		box-shadow: 0 18px 48px 0 #ccc, 0 8px 12px 0 #ddd;
	}
	.panel {
		position: absolute;
		left: 50%;
		top: 45%;
		width: 240px;
		transform: translate(-50%, -45%);
		z-index: 999;
		background-color: #ffffff;
		border-radius: 6px;
		box-shadow: 0 18px 48px 0 #ccc, 0 8px 12px 0 #ddd;
		border: solid 1px #fefefe;
	}

	.panel h1 {
		text-align: center;
		font-size: 24px;
	}
</style>

<style>
	.mask input {
		border: none!important;
		border-radius: 0;
		height: 56px;
		background-color: transparent!important;
		padding-left:18px;
		padding-right:18px; 
	}

	.mask div:first-child>input {
		border-bottom: solid 1px #ccc!important;
	}
</style>