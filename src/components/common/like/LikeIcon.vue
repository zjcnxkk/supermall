<template>
<div class="iconblock">
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>
</template>

<script>
	export default{
		name:'LikeIcon',
		 data() {
		       return {
		         value2: 0,
		         colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
		       }
		     }
	}
</script>

<style scope>
	.iconblock{
		margin-top: 5px;
	}
</style>
