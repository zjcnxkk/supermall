<template>
<div class="detailTitle">
		<span>
		<slot></slot>
		</span>
	</div>
</template>

<script>
	export default{
		name:'DetailTitle',
		data(){
			return{
			}
		}
	}
</script>

<style>
	.detailTitle{
		margin-top:30px;
		width: 100%;
		height: 50px;
		font-size: 24px;
		line-height: 50px;
	}
	.detailTitle span{
		margin-left: 25px;
		padding: 6px;
        border-right: 4px solid #FED150;
		border-left: 4px solid #FED150;
	}
</style>
