<template>
   <div>
	   <main-topbar></main-topbar>
	   <div class="center">
		   <comment></comment>
	   </div>
   </div>
</template>

<script>
	import MainTopbar from 'components/content/MainTopbar.vue'
	import Comment from 'components/common/comment.vue'
	
	export default{
		name:'Forum',
		data(){
			return{
			}
		},
		components:{
			MainTopbar,
			Comment
		}
	}
</script>

<style scope>
	.center{
		margin: 0 auto;
		padding-top: 128px;
		width: 70%;
	}
</style>
