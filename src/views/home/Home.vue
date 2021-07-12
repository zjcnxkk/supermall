<template>
	<div>
     //导航条
	<main-topbar></main-topbar> 
	<div class="center">
	<home-swiper :banners="banners"></home-swiper>
    <home-title>栏目推荐</home-title>
	<home-recommend :recommends="recommends"></home-recommend>
	<tab-control 
	:titles='["流行","精选","新款"]' 
	@tabClick="tabClick"
	></tab-control>
	<goods :goods="goods[currentTyep]"></goods>
	</div>
	</div>
</template>

<script>
	//接口数据  由于用本地数据 暂时用不到
	// import {getHomeMultidata} from "network/home"
	//组件
	import MainTopbar from 'components/content/MainTopbar.vue'
	
	import HomeSwiper from './childcomps/HomeSwiper'
	import HomeRecommend from './childcomps/HomeRcommend'
	import HomeTitle from './childcomps/HomeTitle'
	
	import Goods from 'components/content/Goods'
	
	//自主数据导入
	import homebanner from "../../data/banner.js"
	import homerecommend from "../../data/recommend.js"
	import homegoods from "../../data/goods.js"
	//自主控制的导航条
	import TabControl from "components/content/TabControl"
	
	export default{
		name:'Home',
		data(){
			return{
				banners:[],
				recommends:[],
				goods:{
					pop:[],
					news:[],
					sell:[]
				},
				currentTyep:'pop',
				scrollTop:0
			}
		},
		created(){
			//1.请求网路数据
			// getHomeMultidata().then(
			//     res => {
					//用固定的数据来显示图片
					this.banners = homebanner
					// this.banners = res.data.banner.list;
					this.recommends = homerecommend
					// this.recommends = res.data.recommend.list
					this.findtype("pop")
					this.findtype("news")
					this.findtype("sell")
				// })
		},
		//进入该页面时，用之前保存的滚动位置赋值
		activated() {
			document.documentElement.scrollTop = this.scrollTop
		},
		//在页面离开时记录滚动位置
		beforeRouteLeave (to, from, next) {
		    this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		    next()
		  },
		methods:{
			//这个方法用于得到本地数据进行商品类别分类
			findtype(goodstype){
				this.goods[goodstype]=homegoods.filter(x => {return x.type === goodstype}) 
			},
			//这个用于监听选择的商品类型
			tabClick(index){
				switch(index){
					case 0:
					  this.currentTyep='pop';
					  break;
					case 1:
					  this.currentTyep='news';
					  break;
					case 2:
					  this.currentTyep='sell';
					  break;
				}
			}
		},
		components:{
			MainTopbar,
			HomeSwiper,
			HomeRecommend,
			HomeTitle,
			TabControl,
			Goods
		}
	}
</script>

<style>
	body{
		background-color:#f7f7f7;
	}
	.center{
		width: 70%;
		margin: 0 auto;
		background-color: white;
	}
</style>
