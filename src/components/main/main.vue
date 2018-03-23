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

import PageTabsType from '@/store/modules/pageTab/mutation.type'
import SystemType from '@/store/modules/user/system/mutation.type'

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
			showLoading: false && this.$store.state.isLoading,
			listData: [{
				label: 'Hello',
				children: [{
					label: 'Vue',
					children: [{
						label: 'Hello Vue',
						url: '/hello'
					}]
				}]
			}, {
				label: 'Pages',
				children: [{
					label: 'Blank_page',
					children: [{
						label: 'Page_1',
						url: '/page_1'
					}]
				}, {
					label: 'Filled_page',
					children: [{
						label: 'Page_2',
						url: '/page_2'
					}]
				}]
			}, {
				label: '一级 3',
				children: [{
					label: '二级 3-1',
					children: [{
						label: '三级 3-1-1'
					}]
				}, {
					label: '二级 3-2',
					children: [{
						label: '三级 3-2-1'
					}]
				}]
			}],
		}
	},
	computed: {
		activeMenus() {
			for (let item of this.$store.state.User.System.modules) {
				if (item.nid === this.$store.state.User.System.active) return item.pages
			}
			return []
		},
		systems() {
			return this.$store.state.User.System.modules.map(val => ({
				name: val.name,
				nid: val.nid,
				icon: val.icon
			}))
		},
		activeNid() {
			return  this.$store.state.User.System.active
		},
		openedPages() {
			return this.$store.state[PageTabsType.mod].pages
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
}

function $toTop() {

}


function $asideClick(data) {
	if (data.src) {
		this.$store.commit(PageTabsType.mutations.ADD_PAGE, {
			title: data.title,
			src: data.src
		})
	}
}

function $headerClick(nid) {
	this.$store.commit(SystemType.mutations.CHANGE_MOD, nid)
}


function $unload() {

}


function changeMod() {

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