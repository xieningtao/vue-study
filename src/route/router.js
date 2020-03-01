
import Vue from 'vue'
import VueRouter from "vue-router"
import Home from "../components/Home"
import Detail from "../components/Detail"

Vue.use(VueRouter)
var aaaroutes = [{
    path:'/home',
    component:Home
},{
    path:"/detail",
    component:Detail
}]
var route = new VueRouter({
    mode:'history',
    routes:aaaroutes
})
route.beforeEach((to, from, next) => {
    console.log("this is router hooks")
    next()
})
export default route