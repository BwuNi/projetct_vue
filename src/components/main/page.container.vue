<template>
	<div class="page_container">
		<el-tabs class="page-tabs md-h6" v-model="activePage" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane style="height:100%;overflow:auto" :key="item.name" v-for="(item, index) in openedPages" :label="item.title" :name="item.name">
				<!-- <router-view :name='item.src'></router-view> -->
				<keep-alive>
					<component :is="item.src">
						<!-- 非活动组件将被缓存！ -->
					</component>
				</keep-alive>
			</el-tab-pane>
		</el-tabs>

		<transition name="fade">
			<bwu-modal v-if='showPanel' :isShow.sync='showPanel' :title='"临时"'>
				<el-tree slot='body' :data="allPages" :props="defaultProps" @node-click="handleNodeClick">
				</el-tree>
			</bwu-modal>
		</transition>

	</div>
</template>

<script>
import Pages from '@/router/RouterLabel'
import pageTabs from '@/store/modules/pageTabs'

export default {
	name: "bwu-pageContainer",
	components: {
	},
	data() {
		return {
			tabs: this.$store.getters[pageTabs.get.STATE],
			showPanel: true,
			defaultProps: {
				children: 'children',
				label: 'label'
			},
			allPages: [Pages]
		};
	},
	computed: {
		activePage: {
			get: function () {
				return this.$store.getters[pageTabs.get.STATE].activePageName
			},
			set: function (value) {
				this.$store.commit(pageTabs.mut.SET_PAGE, value)
			}
		},
		openedPages: function () {
			return this.$store.getters[pageTabs.get.STATE].pages
		}
	},
	mounted() {
	},
	methods: {
		handleTabsEdit(targetName, action) {

			if (action === "add") {


				this.showPanel = true
			}
			if (action === "remove") {


				let tabs = this.openedPages;
				let activeName = this.activePage;
				let closeIndex

				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
						closeIndex = index
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
						}
					}
				});

				console.log(pageTabs.mut)
				this.$store.commit(pageTabs.mut.REMOVE_PAGE, closeIndex)
				this.$store.commit(pageTabs.mut.SET_PAGE, activeName)
			}
		},
		handleNodeClick(data) {
			if (data.src) {
				this.$store.commit(pageTabs.mut.ADD_PAGE, {
					title: data.label,
					src: data.src
				})
			}
		}
	}
};
</script>

<style scoped>
.page_container {
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 18px 18px 18px;
    overflow: auto;
}

.page-tabs {
    background-color: rgb(248, 248, 248);
    height: 100%;
    background-color: #fff;
}
</style>

<style>
.el-tabs__nav-scroll {
    height: 36px;
    line-height: 36px;
}

.el-tabs__item {
    height: 36px;
    line-height: 34px;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-radius: 0;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
    border-top-color: transparent;
}

.el-tabs--card > .el-tabs__header .el-tabs__item.is-active:first-child {
    border-left-color: transparent;
}

.el-tabs__nav-next {
    line-height: 37px;
}

.el-tabs__nav-prev {
    line-height: 37px;
}

.el-tabs__new-tab {
    margin: 9px;
    z-index: 1;
    position: relative;
}

.el-tabs__header {
    margin: 0;
}

.el-tabs__nav-scroll {
    z-index: 1;
    position: relative;
}

.el-tabs__content {
    height: 100%;
    top: -36px;
    padding-top: 36px;
}
</style>