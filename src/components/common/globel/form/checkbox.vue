<template>
  <div>
    <div @click="click">{{title}} ：</div>
    <el-checkbox-group v-model="checkList">
        <el-checkbox  v-for='(item,index) in array' :label="item" :key="index">{{item}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
    name: 'bwu-radio',
    props: ['array', 'vals','title'],
    data() {
        return {
            checkList: this.vals?this.vals.map(i=>i):[]
        }
    },
    methods: {
        click(){
            this.$emit('update:vals', this.checkList.map(i=>i))
        }
    },
    computed: {
    },
    mounted() {

    }
}
</script>

<style scoped>

</style>

