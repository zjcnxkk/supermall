<template>
<div class="goods">
	<goods-item v-for="(item,index) in goods" :goodsitem="item" :key="index"></goods-item>
</div>
</template>

<script>
	import GoodsItem from "./GoodsItem.vue"
	export default{
		name:'Goods',
		data(){
			return{
			}
		},
		components:{
			GoodsItem
		},
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.goods{
		padding-bottom: 20px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>
