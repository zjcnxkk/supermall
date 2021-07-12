<template>
<div class="block" >
    <el-carousel trigger="hover" height="500px">
      <slot></slot>
    </el-carousel>
  </div>
</template>

<script>
	export default{
		name:'swiper',
		data(){
			return{
			}
		}
	}
</script>
<style>
	  .block{
		  padding-top: 63px;
		  width: 80%;
		  margin: 0 auto;
	  }
</style>
