<template>
      <div class="goods-item">
		  <img :src="goodsitem.img" alt="" @click="ItemClick()" />
		  <div class="goods-text">
			  <p>{{goodsitem.title}}</p>
			  <div class="goods-span">
			  <span class="price">￥{{goodsitem.price}}</span>
			  <span class="like">
				<img src="../../assets/img/common/like.svg" />
			  {{goodsitem.like}}
			  </span>
			  </div>
			  <LikeIcon></LikeIcon>
		  </div>
	  </div>
</template>

<script>
	import LikeIcon from 'components/common/like/LikeIcon'
	export default{
		name:'GoodsItem',
		data(){
			return{
			}
		},
		components:{
			LikeIcon
		},
		props:{
			goodsitem:{
				type:Object,
				default(){
					return []
				}
			}
		},
		methods:{
			ItemClick(){
				this.$router.push("/detail/"+ this.goodsitem.id)
			}
		}
	}
</script>

<style scoped>
	.goods-item{
		margin-top: 40px;
		width: 26%;
		text-align: center;
	}
	.goods-item img{
		border: 2px solid whitesmoke;
		width: 95%;
		padding: 15px;
		border-radius: 5px;
	}
	.goods-text{
		border-radius: 5px;
		border: 2px solid whitesmoke;
		text-align: center;
	}
	.goods-item p{
		font-size: 16px;
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 4px;
		width: 70%;
	}
	.goods-span {
		margin-top: 5px;
	}
	.goods-item span{
		position: relative;
		color: #FED150;
	    margin-top: 5px;
		padding-right:35px;
	}
	.price{
		font-size: 24px;
		font-weight: bold;
	}
	.goods-span .like{
		color: #475669;
		font-size: 18px;
	}
	.goods-span img{
		position: absolute;
		left: -18px;
		top: -2px;
		padding: 0px;
		border: none;
		width: 30%;
	}
</style>
