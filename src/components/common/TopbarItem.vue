<template>
     <div class="top-item" @click="itemClick" :class="{light:isLight}"><slot></slot></div>
</template>

<script>
	export default{
		name:'TopbarItem',
		data(){
			return{
			}
		},
		props:{
			path:String
		},
		computed:{
			isLight(){
				return this.$route.path.indexOf(this.path)  !== -1
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path).catch(err => err)
			}
		}
	}
</script>

<style scoped>
	.top-item{
		line-height: 60px;
		text-align: center;
		height:60px;
		flex: 1;
		font-size: 18px;
		color: #6f6f6f;
		font-family:微软雅黑;
		font-weight:550;
	}
	.light{
	    color:#FED150;
		background-color:rgba(213, 213, 213, 0.2);
	}
</style>
