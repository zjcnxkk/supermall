<template>
    <div class="cart-list">
		<div class="lable">
			<span class="spanone">商品信息</span>
			<span class="spantwo">单价</span>
			<span class="spantwo">数量</span>
			<span class="spantwo">金额</span>
			<span class="spantwo">操作</span>
		</div>
		<div class="cart-item" v-for="(item,index) in cartList">
			<img :src="item.img" />
			<span >{{item.title}}</span>
			<span class="spantwo red">￥{{item.price}}</span>
			<span class="spantwo">{{item.num}}</span>
			<span class="spantwo red">￥{{item.allprice}}</span>
			<div  class="spantwo itembtn">
				<el-button type="danger" size="median" @click="delitem(item.id)">删除商品</el-button>
			</div>
		</div>
		<div class="sumprice">
			总金额:
			<span class="red">￥{{sumprice}}</span>
			<span class="pay" @click="clickpay">结算</span>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	
	export default{
		name:'CartList',
		data(){
			return{	
			}
		},
		computed:{
			...mapGetters(['cartList','sumprice'])
	    },
		methods:{
			clickpay(){
				alert("结算成功")
			},
			delitem(id){
				this.$store.commit('delCart',id)
			}
		}
	}
</script>

<style scope>
	.cart-list{
		margin: 0 auto;
		width: 70%;
	}
	.lable{
		text-align:center;
		display: flex;
		height: 50px;
		line-height: 50px;
		background-color:whitesmoke;
	}
	.lable span{	
		font-size: 18px;
		display: block;
	}
	.spanone{
		flex:4;
	}
	.spantwo{
		flex:1
	}
	.cart-item{
		text-align: center;
		align-items: center;
		display: flex;
		height: 200px;
	}
	.cart-item img{
		width: 20%;
		border: 1px solid whitesmoke;
	}
	.cart-item span{
		font-size: 16px;
		margin-left: 10px;
		font-weight: 600;
		display: block;
		width: 28%;
	}
	.red{
		color:#FF4400;
	}
	.itembtn{
		margin-left: 10px;
	}
	.itembtn span{
		margin-left:0px
	}
	.sumprice{
		font-weight: 500;
		text-align: center;
		line-height: 50px;
		font-size: 22px;
		margin-top: 20px;
		height: 50px;
		background-color: whitesmoke;
	}
	.pay{
		font-weight: 500;
		color: white;
		width: 100px;
		background-color: #FF4400;
		float: right;
	}
</style>
