<template>
    <topbar>
		<topbar-logo slot='logo'>
			<img slot="logo-img" src="../../assets/img/topbar/logo.svg" />
			<div slot="logo-text">star clothes</div>
		</topbar-logo>
		<topbar-item slot='item' path='/home'>首页</topbar-item>
		<topbar-item slot='item' path='/catalogue'>分类</topbar-item>
		<topbar-item slot='item' path='/cart'>购物车</topbar-item>
		<topbar-item slot='item' path='/forum'>社区</topbar-item>
		<topbar-item slot='item' path='/model'>模型库</topbar-item>
		<serch slot='serch'></serch>
		<topbar-img path='/user'>
			<img  slot='topbar-img' src="../../assets/img/topbar/me.svg"  alt=""/>
			<img  slot='topbar-img-light' src="../../assets/img/topbar/me-light.svg"  alt=""/>
		</topbar-img>
		<topbar-img path='/login'>
			<img  slot='topbar-img' src="../../assets/img/topbar/out.svg"  alt=""/>
			<img  slot='topbar-img-light' src="../../assets/img/topbar/out-light.svg"  alt=""/>
		</topbar-img>
	</topbar>
</template>

<script>
	import Topbar from '../common/Topbar.vue'
	import TopbarItem from '../common/TopbarItem.vue'
	import TopbarLogo from '../common/TopbarLogo.vue'
	import Serch from '../common/Serch.vue'
	import TopbarImg from '../common/TopbarImg.vue'
	
	export default{
		name:'MainTopbar',
		data(){
			return{
			}
		},
		components:{
			TopbarItem,
			TopbarLogo,
			Topbar,
			Serch,
			TopbarImg
		}
	}
</script>

<style>
	
</style>
