<template>
	<div class="mask">
		<div class="motal-panel md-h3" :style="panel_style">
			<div class="motal-panel_head" :style="head_style">
				<span class="motal-close_btn iconfont icons-close" @click='close'></span>
				<slot name='head'>
					<div class="head-title" @mousedown="moveModal">{{title}}</div>
				</slot>
			</div>
			<div class="motal-panel_body" :style="body_style">
				<slot name='body'>
					只有在没有要分发的内容时才会显示。
				</slot>
			</div>
			<div class="motal-panel_foot" :style="foot_style">
				<slot name='foot'>
					只有在没有要分发的内容时才会显示。
				</slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'bwu-modal',
	props: ['isShow', 'title', 'width', 'height', 'headHeight', 'footHeight', 'footer'],
	data() {
		return {
			target: {
				width: 400,
				height: 300,
				left: -200,
				top: -150
			},

			head_style: {
				height: this.headHeight ? this.headHeight : '32px',
				lineHeight: this.headHeight ? this.headHeight : '32px'
			},
			foot_style: {
				height: this.footHeight ? this.footHeight : '32px',
				display: this.footer ? 'block' : 'none'
			},
			body_style: {}
		}
	},
	methods: {
		close() {
			// this.$store.commit('addPage', 'title', 'root-home-hello','')
			this.$emit('update:isShow', false)
		},
		moveModal(event) {
			const _this = this,
				orginLeft = _this.target.left,
				orginTop = _this.target.top

			// 解决event兼容问题
			var event = event || window.event;
			// 获取鼠标在页面上坐标
			var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
			var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;

			// 给document绑定鼠标移动事件，防止鼠标快速滑动时滑出innerht
			document.onmousemove = function (event) {
				var event = event || window.event;
				// 获取鼠标移动时的坐标
				var moveX = event.pageX || event.clientX + document.documentElement.scrollLeft;
				var moveY = event.pageY || event.clientY + document.documentElement.scrollTop;
				// 鼠标移动时demo的位置坐标
				_this.target.left = orginLeft + moveX - pageX;
				_this.target.top = orginTop + moveY - pageY;
			}

			document.onmouseup = () => {
				document.onmousemove = document.onmouseup = null
			}
		}
	},
	computed: {
		panel_style() {
			return {
				width: this.target.width + 'px',
				height: this.target.height + 'px',
				transform: `translate(${this.target.left}px,${this.target.top}px)`,
				transition:`all,left,top 0.3s,0s,0s ease-out,ease-out,ease-out`,

				paddingTop: this.headHeight ? this.headHeight : '32px',
				paddingBottom: !this.footer ? '0'
					: this.footHeight ? this.footHeight : '32px'
			}
		}
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
  /* transform: translate(-50%, -45%); */
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

.motal-panel_head * {
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
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