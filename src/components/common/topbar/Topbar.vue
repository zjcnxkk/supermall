<template>
<div class="top-bar">
	<div class="top-bar-center">
	     <slot name="logo"></slot>
	<div class="item">
	     <slot name="item"></slot>
	</div>
	<div class="serch">
		<slot name="serch"></slot>
	</div>
	
	<div class="topbar-img">
	<slot ></slot>
	</div>
	
	</div>
</div>
</template>

<script >
    export default{
		name:'Topbar',
		data(){
			return{
			}
		},
	}
</script>

<style scoped>
	.top-bar{
		z-index: 9999;
		display: flex;
		background-color:#ffffff;
		box-shadow: 0 4px 1px rgba(180, 180, 180, 0.1);
		position: fixed;
	    left: 0;
		right: 0;
		top: 0;
	}
	.top-bar-center{
		display: flex;
		width: 70%;
		margin: 0 auto;
	}
	.item{
		margin-left: 10px;
		width: 50%;
		display:flex;
		align-items: center;
		
	}
	.serch{
		display:flex;
		align-items: center;
		margin-left:80px;
	}
	.topbar-img{
		margin-left:40px;
		width: 10%;
		display: flex;
		align-items: center;
	}
</style>
