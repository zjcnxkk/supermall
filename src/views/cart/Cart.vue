<template>
	<div>
	<main-topbar></main-topbar> 
	<div class="center">
		<cartlist></cartlist>
	</div>
	</div>
</template>

<script>
	import MainTopbar from 'components/content/MainTopbar.vue'
	import Cartlist from './childcomps/CartList.vue'
	
	export default{
		name:'Cart',
		data(){
			return{
			}
		},
		components:{
			MainTopbar,
			Cartlist
		}
	}
</script>

<style>
	.center{
		min-height: 800px;
		width: 70%;
		padding-top: 70px;
	}
</style>
