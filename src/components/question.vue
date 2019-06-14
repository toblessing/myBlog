
<script>
export default {

methods:{
    onClick(){
        //向父组件传递事件
        this.$emit("onclick");
    }
}
}
</script>

<template>
    <span @click="onClick" class="el-icon-question bottom-right">
    </span>
</template>
<style>
.bottom-right{
    position:fixed;
    bottom: 20px;
    right: 20px;
    font-size: 40px;
    cursor: pointer;
}
</style>
