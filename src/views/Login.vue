<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="user"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="pwd" type="password"/>
    </el-form-item>
    <el-form-item label="身份">
      <el-radio-group v-model="role">
        <el-radio label="student">学生</el-radio>
        <el-radio label="admin">管理员</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<!--setup VUE写法-->
<script setup>
// reactive  响应数据核心
// toRefs
import {reactive, toRefs} from 'vue'
import adminManage from './../hooks/admin.js'

const form = reactive({
  user: '',
  pwd: '',
  role: '',
})

// adminMethouds = adminManage()
const {Admin_Login} = adminManage()

//转对象  查看值需要value
const {user, pwd, role} = toRefs(form)
const onSubmit = () => {
  console.log(user.value)
  console.log(pwd.value)
  console.log(role.value)
  //发起请求
  //hooks文件夹： 业务内容提供独立出来
  Admin_Login(user,pwd)
}

</script>


<style scoped>

</style>