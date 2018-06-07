<template>
	<div id="app" data-sideOpen=true>
		<bwu-aside :list='activeMenus' @nodeClick='$asideClick' ></bwu-aside>

		<bwu-header :list='systems' :active ='activeNid'   @nodeClick='$headerClick'></bwu-header>

		<bwu-pageContainer style="z-index:2;overflow:hidden"></bwu-pageContainer>

		<transition name="fade">
			<bwu-login v-if='showLogin' @login='$login'></bwu-login>
		</transition>

		<transition name="fade">
			<bwu-loading v-if='showLoading' @unload='$unload'></bwu-loading>
		</transition>

	</div>
</template>

<script>
import Header from './header.vue'
import Loading from './loading.vue'
import Aside from './aside.vue'
import Login from './login.vue'
import PageContainer from './page.container.vue'

import pageTabs from '@/store/modules/pageTabs'
import loading from '@/store/modules/loading'
import system from '@/store/modules/user/system' //SystemType


export default {
	name: 'bwu-home',
	components: {
		'bwu-header': Header,
		'bwu-aside': Aside,
		'bwu-login': Login,
		'bwu-loading': Loading,
		'bwu-pageContainer': PageContainer,
	},
	data() {
		return {
			showLogin: true,
			showLoading: false && this.$store.getters[loading.get.STATE].isLoading
		}
	},
	mounted() {
		window.xx = this.$store
	},
	computed: {
		activeMenus() {
			for (let item of this.$store.getters[system.get.STATE].modules) {
				if (item.nid === this.$store.getters[system.get.STATE].active) return item.pages
			}
			return []
		},
		systems() {
			return this.$store.getters[system.get.STATE].modules.map(val => ({
				name: val.name,
				nid: val.nid,
				icon: val.icon,
				sort: val.sort,
			}))
		},
		activeNid() {
			return this.$store.getters[system.get.STATE].active
		},
		openedPages() {
			return this.$store.getters[pageTabs.get.STATE].pages
		}
	},
	methods: {
		$login,
		$unload,
		$asideClick,
		$headerClick,
	}
}

function $login() {
	const _this = this
	_this.$data.showLogin = false
	this.$store.dispatch(system.act.CHANGE_MOD, this.$store.getters[system.get.STATE].modules[0])
}

function $toTop() {

}


function $asideClick(data) {
	if (data.src) {
		this.$store.commit(pageTabs.mut.ADD_PAGE, {
			title: data.title,
			src: data.src
		})
	}
}

function $headerClick({nid,sort}) {
	this.$store.dispatch(system.act.CHANGE_MOD, {nid,sort})
}


function $unload() {

}


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app[data-sideopen='true'] {
  padding-left: 240px;
}
</style>