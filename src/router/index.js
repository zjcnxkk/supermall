import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Categlogue = () => import('views/catalogue/Catalogue')
const Cart = () => import('views/cart/Cart')
const User = () => import('views/user/User')
const Detail = () => import('views/detail/Detail')
const Forum = () => import('views/forum/Forum')

const routes = [
     {
     	path:'',
     	redirect:'/home'
     },
     {
     	path:'/home',
     	component:Home,
		meta:{
			keepAlive:true
		}
     },
     {
     	path:'/catalogue',
     	component:Categlogue
     },
	 {
	 	path:'/forum',
	 	component:Forum
	 },
     {
     	path:'/cart',
     	component:Cart
     },
     {
     	path:'/user',
     	component:User
     } ,
	 {
	 	path:'/detail/:id',
	 	component:Detail
	 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
