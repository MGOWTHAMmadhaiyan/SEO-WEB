<template>
    <el-row>
        <el-row>

            <el-button @click="goToHomePage" type="primary"><i class="el-icon-back"></i>back</el-button>

        </el-row>      
    </el-row>
</template>
<script>
export default {
    name: 'backPage',
    data() {
        return {
        }
    },
    methods: {
        goToHomePage(){
            console.log('back')
            this.$router.push('/')
        }
    }
}
</script>
<style>
</style>