<template>
	<div>
    <main-topbar></main-topbar> 
   <div class="detail">
	   <div class="goods-detail">
		   <div class="goods-img">
			   <img :src="goods[0].img"/>
		   </div>
		   <div class="goods-mes">
			   <div class="goods-title">{{goods[0].title}}</div>
			   <div class="brand-title">
				   <img src="../../assets/img/common/goodlogo.png" />
				    海量新品 潮流穿搭 玩趣互动
			   </div>
			   <div class="goods-price">
				   <div class="old-price">价格：<span>￥{{oldPrince}}</span></div>
				   <div class="new-price">
					   商城价：
					   <span>￥{{goods[0].price}}</span>
				   </div>
				   <div class="goods-like">
				   		收藏数：
				   		<span>{{goods[0].like}}</span>
				   </div>
				   <span class="goods-label">新品上架</span>
			   </div>
			   <div class="goods-num">
				   <span>数量: </span>
				   <button @click="increase">➕</button>
				   <input  v-model="num"/>
				   <button :disabled="isOnclick" @click="decrease">➖</button>
			   </div>
			   <div class="goods-btn">
				   <el-row>
					   <el-button size="small" round type="primary" @click="tomodel">产品试穿</el-button>
					   <el-button size="small" round type="primary" @click="addToCart">添加至购物车</el-button>
				   </el-row>
			   </div>
		   </div>
	   
	   </div>
	 <div class="other-detail">
	 <DetailTitle>商品详情</DetailTitle>
	 <el-divider></el-divider>
	 <img  v-for="item in goods[0].detailimg" :src="item" /> 
	 </div>
   </div>
   </div>
</template>

<script>
	import homegoods from "../../data/goods.js"
	import MainTopbar from 'components/content/MainTopbar.vue'
	import DetailTitle from './childcomps/DetailTitle'
	
	export default{
		name:'Detail',
		data(){
			return{
				id:null,
				goods:[],
				num:1,
				isOnclick:false
			}
		},
		created(){
			this.id = parseInt(this.$route.params.id)
			this.goods = homegoods.filter(x => {return x.id === this.id})
		},
		methods:{
			increase(){
				this.num++
				if(this.num >= 0){
					this.isOnclick=false
				}
			},
			decrease(){
				this.num--
				if(this.num <= 0){
					this.isOnclick=true
				}
			},
			tomodel(){
				this.$router.push("/home").catch(err => err)
			},
			addToCart(){
				//获取商品信息
				const product = {}
				product.id = this.goods[0].id;
				product.title = this.goods[0].title;
				product.img = this.goods[0].img;
				product.price = this.goods[0].price;
				product.num = this.num
				product.allprice = parseInt(product.price)*product.num
				//添加到vuex
				this.$store.commit('addCart',product)
			}
		},
		components:{
			MainTopbar,
			DetailTitle
		},
		computed:{
			oldPrince(){
				return parseInt(this.goods[0].price)+30.00
			}
		}
	}
</script>

<style scope>
	.goods-detail{
		display: flex;
	}
	.goods-img{
		flex: 1;
		margin-left:150px;
	}
	.goods-img img{
		border: 2px solid whitesmoke;
		margin-top:80px;
		width:90%;
	}
	.goods-mes{
		flex:1.5;
	}
	.goods-title{
		margin-top:50px;
		padding: 30px;
		margin-right: 150px;
		height: 100px;
		font-size: 20px;
		font-weight: 700;
		color: #3C3C3C;
		text-align:left;
	}
	.brand-title{
		padding-left: 30px;
		text-align: left;
	}
	.goods-price{
		text-align: left;
		padding: 15px;
		margin-top: 10px;
		margin-left: 30px;
		width: 55%;
		height: 150px;
		background-color:#FFF2E8;
	}
	.old-price span{
		text-decoration: line-through;
	}
	.new-price{
		margin-top: 10px;
	}
	.new-price span{
		font-size:30px;
		color: #ff4400;
		font-weight: 600;
	}
    .goods-label{
		display: block;
		width: 70px;
		text-align: center;
		background-color: #FF8E1B;
	    color: white;
		padding: 2px;
		margin-top: 10px;
	}
	.goods-like{
		margin-top: 15px;
	}
    .goods-num{
		margin-left: 35px;
		margin-top: 10px;
		text-align: left;
	}
	.goods-num button{
		font-size: 14px;
	}
	.goods-num input{
		margin: 5px;
		text-align: center;
		width: 100px;
	}
	.goods-btn{
		text-align: left;
		padding-left: 30px;
		margin-top: 5px;
	}
	.detail {
		padding-top: 63px;
		margin: 0 auto;
		width: 70%;
		text-align: center;
		background-color: white;
	}
	.other-detail img{
		width: 34%;
	}
</style>
