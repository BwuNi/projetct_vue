<template>
	<div class="mask">
		<div class="motal-panel md-h3" :style="panel_style">
			<div class="motal-panel_head" :style="head_style">
				<span class="motal-close_btn iconfont icons-close" @click='close'></span>
				<slot name='head'>
					<div class="head-title">{{title}}</div>
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
			panel_style: {
				width: this.width ? this.width : '400px',
				height: this.height ? this.height : '300px',
				paddingTop: this.headHeight ? this.headHeight : '32px',
				paddingBottom: !this.footer ? '0'
					: this.footHeight ? this.footHeight : '32px'
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