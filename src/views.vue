<template>
    <div>
        <el-button @click="toPage('/views')" >页面1</el-button>
        <el-button @click="toPage('/views2')">页面2</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        toPage(newPath){
            this.$router.push({path: newPath || '/'});
        }
    }
}
</script>

<style scoped>

</style>