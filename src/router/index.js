import {createRouter, createWebHashHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [{
    path: '/', component: Login
}, {
    path: '/home', component: Home
}]

const router = createRouter({
    history: createWebHashHistory(), routes
})

export default router