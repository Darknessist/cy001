<template>
  <el-form :model="loginForm" class="login-container">
    <h3>系统登陆</h3>
    <el-form-item>
        <el-input type="input" placeholder="请输入账号" v-model="loginForm.username">
        </el-input>
    </el-form-item>
    <el-form-item>
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">  
        </el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="login">
            登陆
        </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { getCurrentInstance } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
setup(){
    const loginForm=reactive({
        usename:'admin',
        password:'admin',
    });
    const store=useStore()
    const router=useRouter()
    const {proxy}=getCurrentInstance();
    const login=async()=>{
        const res=await proxy.$api.getMenu(loginForm);
        store.commit('setMenu',res.menu);
        store.commit('addMenu',router);
        router.push({
            name:'home',
        })
    };
    return{
        loginForm,
        login,
    }
},
}
</script>

<style lang="less" scoped>
.login-container{
    width: 350px;
    background-color: aliceblue;
    border: 1px solid #eaeaea;
    border-radius: 15px;
    padding: 35px 35px 15px 35px;
    box-shadow: 0 0 25px #cacaca;
    margin: 180px auto;
    h3{
        text-align: center;
        margin-bottom: 20px;
        color: #505450;
    }
    :deep(.el-form-item__content){
        justify-content: center;
    }
}

</style>