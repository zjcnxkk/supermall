<template>
<Swiper>
		<el-carousel-item v-for="(item,index) in banners" :key="index">
		  <a :href="item.link">
		  <img :src="item.image" width="100%" height="100%"/>
		  </a>
		</el-carousel-item>
	</Swiper>
</template>

<script>
	import Swiper from 'components/common/swiper/swiper'
	
	export default{
		name:'HomeSwpier',
		data(){
			return{
			}
		},
		components:{
			Swiper
		},
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	
</style>
