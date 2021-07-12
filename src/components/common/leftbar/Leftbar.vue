<template>
    <div class="leftbar"> 
	   <div v-for="(item, index) in titles"
	     class="leftbar-item"
	     :class="{active: index === currentIndex}"
	     @click="itemClick(index)">
	     <span>{{item}}</span>
	   </div>
	</div>
</template>

<script>
	export default{
		name:'Leftbar',
		data(){
			return{
				currentIndex: 0
			}
		},
		props:{
			titles: {
			  type: Array,
			  default() {
			    return []
			  }
			}
		},
		methods:{
			itemClick(index) {
			  this.currentIndex = index;
			  this.$emit('tabClick', index)
			}
		}
	}
</script>

<style scope>
	.leftbar{
		width: 145px;
		height: 500px;
	}
	.leftbar-item{
		margin: 8px;
		height: 80px;
		font-size: 16px;
		text-align: center;
		line-height:80px;
	}
	.active{
		background-color: whitesmoke;
		color:#fed150;
		font-size: 18px;
		font-weight: 600;
	}
</style>
