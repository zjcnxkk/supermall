<template>
<div class="hometitle">
	
		<span>
		<slot></slot>
		</span>
	</div>
</template>

<script>
	export default{
		name:'HomeTitle',
		data(){
			return{
			}
		}
	}
</script>

<style>
	.hometitle{
		margin-top: 15px;
		width: 100%;
		height: 50px;
		font-size: 24px;
		line-height: 50px;
	}
	.hometitle span{
		margin-left: 25px;
		padding: 6px;
        border-bottom: 4px solid #FED150;
		border-left: 4px solid #FED150;
	}
</style>
