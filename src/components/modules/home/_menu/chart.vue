<template>
		<div class="page_1">
      <el-tree :data='menu' node-key="id" :expand-on-click-node="false" :props="{children: 'children',label: 'title'}" default-expand-all :render-content="renderContent"></el-tree>
		</div>
	</template>
	
<script>
import uuid from 'uuid/v1'

export default {
  name: 'page_1',
  computed: {
  },
  data() {
    return {
      menu:[]
    }
  },
  mounted(){

    // 拷贝一份 menu 副本
    const menu = JSON.parse(
      JSON.stringify(
        this.$store.state.User.System.modules.map(v => ({ title: v.name, children: v.pages }))
      )
    )

    // 给 menu 加 id （匿名递归）
    this.menu = (y=>y(y,menu))(
      (y,i)=> i.map(item=>({
        id:uuid(),
        title:item.title,
        src:item.src,
        children:item.children?y(y,item.children):null
      }))
    )

  },
  methods: {
    append(data) {
      const newChild = { id: uuid(), title: 'testtest', children: [] };
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },


    renderContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button size="mini" type="text" on-click={() => this.append(data)}>Append</el-button>
            <el-button size="mini" type="text" on-click={() => this.remove(node, data)}>Delete</el-button>
          </span>
        </span>)
    }
  }
}

</script>
	
	<style>

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>