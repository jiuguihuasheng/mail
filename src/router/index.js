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
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      title: '详情'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: '我的信息'
    },
    // 路由独享的守卫
    beforeEnter: (to, from, next) => {
      // console.log('to-------', to)
      // console.log('from-------', from)
      next()
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

/**
 * 全局守卫：前置守卫guard、后置钩子hook
 */
// 前置守卫guard
router.beforeEach((to, from, next) => {
  console.log('beforeEach to-------', to)
  console.log('beforeEach from-------', from)
  document.title = to.matched[0].meta.title
  next() // 必须执行 否则路由不会跳转, 可以传参指定下一个跳转路由next('/')或者next({path:'/'}), next(false)中断当前路由
  // 例子：
  // 根据用户是否登录跳转
  // if (login) { next() } else { next('/login') }
})

// 后置钩子hook
router.afterEach((to, from) => {
  console.log('afterEach to-------', to)
  console.log('afterEach from-------', from)
})

// 重复路由解决办法
const diyrouter = VueRouter.prototype.replace;
VueRouter.prototype.replace = function (location) {
  return diyrouter.call(this, location).catch(err => console.log(err))
}

export default router
