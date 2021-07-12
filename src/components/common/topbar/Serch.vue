<template>
<el-autocomplete
  v-model="state"
  :fetch-suggestions="querySearchAsync"
  placeholder="请输入内容"
  @select="handleSelect"></el-autocomplete>
</template>

<script>
  export default {
	name:'Serch',
    data() {
      return {
        restaurants: [],
        state: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "薄款圆领纯色打底衫男长袖春季宽松百搭T恤内搭上衣男装", "id": "1" },
		      { "value": "自制潮流高领内搭男士春秋加绒加厚纯棉打底衫潮inst恤男上衣", "id": "2" },
		      { "value": "印花短袖男简约百搭夏季纯棉宽松t恤潮ins半袖情侣上衣", "id": "3" },
		      { "value": "自制纯棉印花体恤短袖男女黑色夏季ins潮简约百搭情侣t恤半袖", "id": "4" },
		      { "value": "韩版潮流圆领短袖t恤男潮夏季纯色情侣宽松百搭纯棉半袖", "id": "5" },
		      { "value": "韩版宽松潮流纯棉短袖男小熊印花夏季纯色打底衫情侣t恤", "id": "6" },
		      { "value": "小众设计感休闲t恤衣服男夏季潮流短袖宽松百搭情侣上衣", "id": "7" },
		      { "value": "设计感印花奶牛小众t恤短袖男夏季宽松休闲半袖情侣衣服", "id": "8" },
		      { "value": "大赖自制国潮短袖t恤男潮情侣夏季宽松小众设计感ins复古原创半袖", "id": "9" },
					{ "value": "夏季设计感小众宽松休闲格子衬衫男情侣衬衣外套长袖薄款", "id": "10" },
					{ "value": "高级感宽松白色衬衫男潮年春款高端休闲衬衣长袖男士外套", "id": "11" },
					{ "value": "设计感小众竖条纹短袖衬衫男女ins潮夏季宽松高级感衬衣", "id": "12" },
					{ "value": "高级感纯色衬衫男潮夏季韩版潮流宽松休闲百搭短袖上衣", "id": "13" },
					{ "value": "潮流条纹衬衫男潮夏季韩版设计感小众刺绣宽松休闲外套", "id": "14" },
					{ "value": "蓝色衬衫男潮夏季高级感设计感小众扎染宽松休闲短袖外套", "id": "15" },
					{ "value": "纯棉无袖背心坎肩男夏季刺绣外穿篮球运动宽松百搭上衣", "id": "16" },
					{ "value": "无袖坎袖纯棉篮球运动背心男潮夏季薄款潮流宽松马甲外穿", "id": "17" },
					{ "value": "运动棒球服春秋季飞行员夹克新款外套男潮ins薄款衣服", "id": "18" },
					{ "value": "垂感坠感百搭小西裤男夏季直筒宽松男士九分休闲西装裤子", "id": "19" },
					{ "value": "直筒百搭男夏季宽松男士九分休闲运动裤子", "id": "20" },
					{ "value": "韩版西裤男夏季薄款垂感直筒宽松西装休闲百搭裤子九分裤", "id": "21" },
					{ "value": "韩版宽松潮流设计感垂感直筒西裤男春季百搭西装休闲裤", "id": "22" },
					{ "value": "运动抽绳卫裤直筒春夏季灰色宽松束脚休闲裤子男潮纯棉", "id": "23" },
					{ "value": "自制灰色束脚卫裤男春季潮牌直筒宽松潮流抽绳休闲裤运动裤子", "id": "24" },
					{ "value": "自制韩版潮流宽松百搭休闲裤春季男女情侣款抽绳束脚运动卫裤", "id": "25" },
					{ "value": "宽松休闲裤男夏季直筒西装裤阔腿垂感九分裤子西裤薄款", "id": "26" },
					{ "value": "2021新款潮流牛仔短裤男士夏季宽松休闲五分裤外穿裤子", "id": "27" },
					{ "value": "复古格子裤男春季直筒宽松九分裤小脚西裤潮流休闲裤子", "id": "28" },
					{ "value": "自制短裤男士潮流百搭夏季外穿休闲西装裤子运动宽松5五分裤", "id": "29" },
					{ "value": "潮牌运动休闲裤短裤男夏季薄款韩版宽松直筒五分裤裤子", "id": "30" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        this.$router.push("/detail/"+ item.id);
		 this.$router.go(0)
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>
<style>
     .el-input__inner
	 {border: 1px solid #FED150 !important;}
	 
	 .el-input.is-active .el-input__inner, .el-input__inner:focus {
	     border-color: #409EFF !important;
	     outline: 0 !important;
	 }
</style>