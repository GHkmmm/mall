import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const Home = () => import('../views/Home/Home');
const Class= ()=> import('../views/Class/Class');
const Shoppingcart= ()=> import('../views/shopcart/shoppingcart');
const Me= ()=> import('../views/profile/Me');
const Detail= ()=> import('../views/detail/Detail')

const routes= [
    {
        path: '',
        redirect:'/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/class',
        component: Class
    },
    {
        path: '/shoppingcart',
        component: Shoppingcart
    },
    {
        path: '/me',
        component: Me
    },
    {
        path: '/detail/:id',
        component: Detail
    }
]

const router= new VueRouter({
    routes,
    mode: 'history'
})


export default router