<template>
	<div class="mask">
		<form class="panel">
			<input type='text' placeholder="用户名" v-model="uname"></input>
			<input type='password' placeholder="密码" v-model="ucode"></input>
			<input type='text' placeholder="验证码" v-model="vcode"></input>
			<div class="check_img"><img :src = 'img_src' @click="init_check"></div>
			<button @click="check_value" type="button" class="btn">登录</button>

		</form>
	</div>
</template>

<script>
import Colorful from '../../utils/view/ColorfulBand.js'
import Ajax from '../../utils/ajax'

let vcode_id = ''

export default {
	name: 'bwu-login',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			img_src: '',
			vcode: '',
			ucode: '',
			uname: ''
		}
	},
	methods: {
		check_value,
		init_check
	},
	mounted: function () {
		const _this = this
		initBackground(_this.$el)
		init_check.apply(_this)
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

function init_check() {
	vcode_id = (() => {
		const vidrandom = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
			'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f',
			'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Q', 'W',
			'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H',
			'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

		return (new Array(5)
			.fill('')
			.map(() =>
				(vidrandom[Math.floor(Math.random() * vidrandom.length)]
				))
			.join('')
		)
	})()
	this.img_src = `http://127.0.0.1:1102/WCKJAPI_MD/GetValidateCode/{"data":"${vcode_id}"}`
}

function before_check(_this) {
	if (_this.uname && _this.ucode && _this.vcode)
		return true
	else
		return false
}

function check_value() {
	const _this = this

	if(!before_check(_this))
		return

	Ajax()
		.data({
			LOGIN: _this.uname,
			PASSWORD: _this.ucode,
			VCODE: _this.vcode,
			VCODEID: vcode_id
		})
		.encrypt(true)
		.post('Login').then(res => console.log(res))

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
  background-color: #fdfdfd;
  z-index: 999;
}

.btn {
  position: absolute;
  width: 100%;
  height: 48px;
  bottom: -72px;
  left: 0;
  right: 0;
  border: none;
  background: aqua;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.33);
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
  box-shadow: 0 4px 17px 0 rgba(0, 0, 0, 0.33);
  border: solid 1px #fefefe;
}

.panel h1 {
  text-align: center;
  font-size: 24px;
}

.check_img {
  width: 83px;
  height: 33px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.check_img img {
  display: block;
  height: 100%;
}
</style>

<style>
.mask input {
  border: none !important;
  border-radius: 0;
  height: 56px;
  background-color: transparent !important;
  padding-left: 18px;
  padding-right: 18px;
}

.mask div:first-child > input {
  border-bottom: solid 1px #ccc !important;
}
</style>