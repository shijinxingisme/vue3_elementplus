import AdminService from './../service/admin.js'
import {ElMessage} from 'element-plus'
import { useRouter } from "vue-router";

function Admin_Manage() {
    const router = useRouter();
    //返回本函数返回对应的Admin相关操作
    function Admin_Login(user, pwd) {
        AdminService.admin_login(user, pwd).then((data) => {
            if (data.code == 200) {
                //登录成功
                ElMessage.success("登录成功")
                //跳转首页
                router.push('/home')
            }else{
                //data.msg 错误提示
                ElMessage.warning(data.msg);
            }
        }).catch(err => {
            ElMessage.error("请求出错,请联系管理员")
        });
    }

    function Add_Admin() {

    }

    function AdminListByPage() {

    }

    function AdminCountBySearchName() {

    }

    return {
        Admin_Login, Add_Admin, AdminListByPage, AdminCountBySearchName
    }
}

export default Admin_Manage