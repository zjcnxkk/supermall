<template>
	<div class="logo">
    <div class='top-logo'><slot name="logo-img"></slot></div>
	<div class="logo-font"><slot name='logo-text'></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TopbarLogo',
		data(){
			return{
			}
		}
	}
</script>

<style scoped>
	.logo{
		display: flex;
	}
	.top-logo{
		display:flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 8px;
		margin-top: 8px;
		height:50px;
	}
	.top-logo img{
		margin-bottom: 8px;
	}
	.logo-font{
		display:flex;
		align-items: center;
		font-size: 26px;
		color: #FED150;
		font-family: Comic Sans MS;
	}
</style>
