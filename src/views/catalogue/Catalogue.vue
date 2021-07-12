<template>
     <div>
     <main-topbar></main-topbar> 
	 <div class="center">
		 <leftbar
		 :titles='["T恤","衬衫","背心","夹克","休闲裤"]' 
	     @tabClick="tabClick">
		 </leftbar>
		 <goods class="goods" :goods="goods[currentType]"></goods>
	 </div>
     </div>
</template>

<script>
	import MainTopbar from 'components/content/MainTopbar.vue'
	import Leftbar from 'components/common/leftbar/Leftbar.vue'
	import Goods from 'components/content/Goods'
	
	import catagoods from "../../data/goods.js"
	
	export default{
		name:'Catalogue',
		data(){
			return{
				currentType:"Tshirt",
				goods:{
					Tshirt:[],
					shirt:[],
					vest:[],
					jackets:[],
					slacks:[]
				},
			}
		},
		components:{
			MainTopbar,
			Leftbar,
			Goods
		},
		created(){
					this.findtype("Tshirt")
					this.findtype("shirt")
					this.findtype("vest")
					this.findtype("jackets")
					this.findtype("slacks")
		},
		methods:{
			findtype(goodsclass){
				this.goods[goodsclass]=catagoods.filter(x => {return x.class === goodsclass}) 
			},
			//这个用于监听选择的商品类型
			tabClick(index){
				switch(index){
					case 0:
					  this.currentType='Tshirt';
					  break;
					case 1:
					  this.currentType='shirt';
					  break;
					case 2:
					  this.currentType='vest';
					  break;
					case 3:
					  this.currentType='jackets';
					  break;
					case 4:
					  this.currentType='slacks';
					  break;
				}
				console.log(this.currentTyep)
			}
		}
	}
</script>

<style scoped>
	.center {
		display: flex;
		padding-top: 68px;
		min-height: 800px;
		width: 70%;
		margin: 0 auto;
	}
	.goods{
		margin: 0 auto;
		width: 80%;
		}
</style>
