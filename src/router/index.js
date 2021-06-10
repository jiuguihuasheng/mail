import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home.vue');
const Detail = () => import('views/detail/Detail.vue');
const Category = () => import('views/category/Category.vue');
const Cart = () => import('views/cart/Cart.vue');
const Profile = () => import('views/profile/Profile.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 重复路由解决办法
const diyrouter = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location) {
  return diyrouter.call(this, location).catch(err => console.log(err))
}

export default router
