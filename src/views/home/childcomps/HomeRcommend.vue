<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div class="item-font">{{item.title}}</div>
			</a>
		</div>
	</div>
 
</template>

<script>
	export default{
		name:'HomeRcommend',
		data(){
			return{
			}
		},
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend{
		margin-top: 15px;
		display: flex;
	}
	.recommend-item{
		flex: 1;
		text-align: center;
	}
	.item-font{
		color: #6f6f6f;
		font-family:微软雅黑;
		font-size: 18px;
		font-weight: bold;
		margin-top: 10px;
		
	}
</style>
