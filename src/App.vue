<template>
  <div id="app">
	  <main-topbar></main-topbar>
	  <router-view></router-view>
  </div>
</template>

<script>
	import MainTopbar from 'components/content/MainTopbar.vue'
	
	export default{
		name:'app',
		components:{
			MainTopbar
		}
	}
</script>
<style>
@import url("assets/css/base.css");
</style>
