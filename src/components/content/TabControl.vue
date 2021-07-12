<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
	  margin-top: 40px;
	/* border: 2px solid rgba(254,209,80,0.8);
	border-radius:50px ; */
	  z-index: 9;
	  background-color: white;
    display: flex;
    text-align: center;
	  font-weight: 550;
    font-size: 22px;
    height: 80px;
    line-height: 80px;
    position: sticky;
	  top:69px
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 2px;
  }

  .active {
	border-radius: 50px;
	background-color:rgba(213, 213, 213, 0.2);
    color: #FED150;
  }

  .active span {
    border-bottom: 3px solid #FED150;
  }
</style>
