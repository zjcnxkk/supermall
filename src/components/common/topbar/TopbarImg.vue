<template>
	<div class="top-bar-img" @click="itemClick">
		<div v-if="!isLight"><slot name='topbar-img'></slot></div>
		<div v-else><slot name='topbar-img-light'></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TopbarImg',
		data(){
			return{
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path).catch(err => err)
			}
		},
		props:{
			path:String
		},
		computed:{
			isLight(){
				return this.$route.path.indexOf(this.path)  !== -1
			}
		}
	}
</script>

<style>
	.top-bar-img{
		flex: 1;
		margin-top: 5px;
	}
	
</style>
