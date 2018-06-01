<template>
    <div class="cntr form__fieldset--small" ref='main' >
        <div class="cntr form__fieldset__title" >{{title}}</div>
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    name: 'bwu-fieldset',
    props: ['title'],
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {
    }
}    
</script>

<style scoped>
.form__fieldset--small{
    padding: 12px 24px;
    padding-top: 48px;
    position: relative;
}

.form__fieldset--large{
    padding: 12px 24px;
    padding-top: 48px;
    position: relative;
}

.form__fieldset__title{
    position: absolute;
    left: 12px;top:12px;
    height: 36px;
    line-height: 36px;
}
</style>


