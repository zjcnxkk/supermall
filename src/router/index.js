import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Categlogue = () => import('views/catalogue/Catalogue')
const Cart = () => import('views/cart/Cart')
const User = () => import('views/user/User')

const routes = [
     {
     	path:'',
     	redirect:'/home'
     },
     {
     	path:'/home',
     	component:Home
     },
     {
     	path:'/catalogue',
     	component:Categlogue
     },
     {
     	path:'/cart',
     	component:Cart
     },
     {
     	path:'/user',
     	component:User
     } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
