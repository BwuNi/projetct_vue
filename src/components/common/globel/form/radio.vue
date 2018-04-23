<template>
  <div>
    <div @click="click">{{title}} ：</div>
        <el-radio v-for='(item,index) in array' v-model="value" :label="index" :key="index">{{item}}</el-radio>
  </div>
</template>

<script>
export default {
    name: 'bwu-radio',
    props: ['array', 'val','title'],
    data() {
        return {
            value: '1'
        }
    },
    methods: {
        click(){
            this.$emit('update:val', this.array[this.value])
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

