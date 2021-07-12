const goods = [
	{
		  "id":1,
		  "title":"薄款圆领纯色打底衫男长袖春季宽松百搭T恤内搭上衣男装",
		  "type":"pop",
		  "class":"Tshirt",
		  "img":require('assets/img/goods/T-shirt1.jpg'),
		  "price":"89.00",
		  "like":'879',
		  "detailimg":[
		  			  require('assets/img/goods/T-shirt1a.jpg'),
		  			  require('assets/img/goods/T-shirt1b.jpg'),
		  			  require('assets/img/goods/T-shirt1c.jpg'),
		  			  require('assets/img/goods/T-shirt1d.jpg'),
		  ]
	},
	{
		"id":2,
		"title":"自制潮流高领内搭男士春秋加绒加厚纯棉打底衫潮inst恤男上衣",
		"type":"news",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt2.jpg'),
		"price":'89.00',
		"like":'325',
		"detailimg":[
					  require('assets/img/goods/T-shirt2a.jpg'),
					  require('assets/img/goods/T-shirt2b.jpg'),
					  require('assets/img/goods/T-shirt2c.jpg'),
					  require('assets/img/goods/T-shirt2d.jpg'),
		]
	},
	{
		"id":3,
		"title":"印花短袖男简约百搭夏季纯棉宽松t恤潮ins半袖情侣上衣",
		"type":"sell",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt3.jpg'),
		"price":'79.00',
		"like":'614',
		"detailimg":[
					  require('assets/img/goods/T-shirt3a.jpg'),
					  require('assets/img/goods/T-shirt3b.jpg'),
					  require('assets/img/goods/T-shirt3c.jpg'),
					  require('assets/img/goods/T-shirt3d.jpg'),
		]
	},
	{
		"id":4,
		"title":"自制纯棉印花体恤短袖男女黑色夏季ins潮简约百搭情侣t恤半袖",
		"type":"pop",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt4.jpg'),
		"price":'99.00',
		"like":'856',
		"detailimg":[
					  require('assets/img/goods/T-shirt4a.jpg'),
					  require('assets/img/goods/T-shirt4b.jpg'),
					  require('assets/img/goods/T-shirt4c.jpg'),
					  require('assets/img/goods/T-shirt4d.jpg'),
		]
	},
	{
		"id":5,
		"title":"韩版潮流圆领短袖t恤男潮夏季纯色情侣宽松百搭纯棉半袖",
		"type":"news",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt5.jpg'),
		"price":'79.00',
		"like":'975',
		"detailimg":[
					  require('assets/img/goods/T-shirt5a.jpg'),
					  require('assets/img/goods/T-shirt5b.jpg'),
					  require('assets/img/goods/T-shirt5c.jpg'),
					  require('assets/img/goods/T-shirt5d.jpg'),
		]
	},
	{
		"id":6,
		"title":"韩版宽松潮流纯棉短袖男小熊印花夏季纯色打底衫情侣t恤",
		"type":"sell",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt6.jpg'),
		"price":'99.00',
		"like":'982',
		"detailimg":[
					  require('assets/img/goods/T-shirt6a.jpg'),
					  require('assets/img/goods/T-shirt6b.jpg'),
					  require('assets/img/goods/T-shirt6c.jpg'),
					  require('assets/img/goods/T-shirt6d.jpg'),
		]
	},
	{
		"id":7,
		"title":"小众设计感休闲t恤衣服男夏季潮流短袖宽松百搭情侣上衣",
		"type":"pop",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt7.jpg'),
		"price":'79.00',
		"like":'325',
		"detailimg":[
					  require('assets/img/goods/T-shirt7a.jpg'),
					  require('assets/img/goods/T-shirt7b.jpg'),
					  require('assets/img/goods/T-shirt7c.jpg'),
					  require('assets/img/goods/T-shirt7d.jpg'),
		]
	},
	{
		"id":8,
		"title":"设计感印花奶牛小众t恤短袖男夏季宽松休闲半袖情侣衣服",
		"type":"news",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt8.jpg'),
		"price":'99.00',
		"like":'435',
		"detailimg":[
					  require('assets/img/goods/T-shirt8a.jpg'),
					  require('assets/img/goods/T-shirt8b.jpg'),
					  require('assets/img/goods/T-shirt8c.jpg'),
					  require('assets/img/goods/T-shirt8d.jpg'),
		]
	},
	{
		"id":9,
		"title":"大赖自制国潮短袖t恤男潮情侣夏季宽松小众设计感ins复古原创半袖",
		"type":"sell",
		"class":"Tshirt",
		"img":require('assets/img/goods/T-shirt9.jpg'),
		"price":'109.00',
		"like":'357',
		"detailimg":[
					  require('assets/img/goods/T-shirt9a.jpg'),
					  require('assets/img/goods/T-shirt9b.jpg'),
					  require('assets/img/goods/T-shirt9c.jpg'),
					  require('assets/img/goods/T-shirt9d.jpg'),
		]
	},
	{
		"id":10,
		"title":"夏季设计感小众宽松休闲格子衬衫男情侣衬衣外套长袖薄款",
		"type":"news",
		"class":"shirt",
		"img":require('assets/img/goods/shirt1.jpg'),
		"price":'148.00',
		"like":'856',
		"detailimg":[
					  require('assets/img/goods/shirt1a.jpg'),
					  require('assets/img/goods/shirt1b.jpg'),
					  require('assets/img/goods/shirt1c.jpg'),
					  require('assets/img/goods/shirt1d.jpg'),
		]
	},
	{
		"id":11,
		"title":"高级感宽松白色衬衫男潮年春款高端休闲衬衣长袖男士外套",
		"type":"sell",
		"class":"shirt",
		"img":require('assets/img/goods/shirt2.jpg'),
		"price":'118.00',
		"like":'349',
		"detailimg":[
					  require('assets/img/goods/shirt2a.jpg'),
					  require('assets/img/goods/shirt2b.jpg'),
					  require('assets/img/goods/shirt2c.jpg'),
					  require('assets/img/goods/shirt2d.jpg'),
		]
	},
	{
		"id":12,
		"title":"设计感小众竖条纹短袖衬衫男女ins潮夏季宽松高级感衬衣",
		"type":"pop",
		"class":"shirt",
		"img":require('assets/img/goods/shirt3.jpg'),
		"price":'118.00',
		"like":'389',
		"detailimg":[
					  require('assets/img/goods/shirt3a.jpg'),
					  require('assets/img/goods/shirt3b.jpg'),
					  require('assets/img/goods/shirt3c.jpg'),
					  require('assets/img/goods/shirt3d.jpg'),
		]
	},
	{
		"id":13,
		"title":"高级感纯色衬衫男潮夏季韩版潮流宽松休闲百搭短袖上衣",
		"type":"news",
		"class":"shirt",
		"img":require('assets/img/goods/shirt4.jpg'),
		"price":'108.00',
		"like":'747',
		"detailimg":[
					  require('assets/img/goods/shirt4a.jpg'),
					  require('assets/img/goods/shirt4b.jpg'),
					  require('assets/img/goods/shirt4c.jpg'),
					  require('assets/img/goods/shirt4d.jpg'),
		]
	},
	{
		"id":14,
		"title":"潮流条纹衬衫男潮夏季韩版设计感小众刺绣宽松休闲外套",
		"type":"sell",
		"class":"shirt",
		"img":require('assets/img/goods/shirt5.jpg'),
		"price":'108.00',
		"like":'276',
		"detailimg":[
					  require('assets/img/goods/shirt5a.jpg'),
					  require('assets/img/goods/shirt5b.jpg'),
					  require('assets/img/goods/shirt5c.jpg'),
					  require('assets/img/goods/shirt5d.jpg'),
		]
	},
	{
		"id":15,
		"title":"蓝色衬衫男潮夏季高级感设计感小众扎染宽松休闲短袖外套",
		"type":"pop",
		"class":"shirt",
		"img":require('assets/img/goods/shirt6.jpg'),
		"price":'108.00',
		"like":'277',
		"detailimg":[
					  require('assets/img/goods/shirt6a.jpg'),
					  require('assets/img/goods/shirt6b.jpg'),
					  require('assets/img/goods/shirt6c.jpg'),
					  require('assets/img/goods/shirt6d.jpg'),
		]
	},
	{
		"id":16,
		"title":"纯棉无袖背心坎肩男夏季刺绣外穿篮球运动宽松百搭上衣",
		"type":"pop",
		"class":"vest",
		"img":require('assets/img/goods/vest1.jpg'),
		"price":'79.00',
		"like":'535',
		"detailimg":[
				require('assets/img/goods/vest1a.jpg'),
				require('assets/img/goods/vest1b.jpg'),
				require('assets/img/goods/vest1c.jpg'),
				require('assets/img/goods/vest1d.jpg'),
			]
		},
	{
		"id":17,
		"title":"无袖坎袖纯棉篮球运动背心男潮夏季薄款潮流宽松马甲外穿",
		"type":"sell",
		"class":"vest",
		"img":require('assets/img/goods/vest2.jpg'),
		"price":'79.00',
		"like":'543',
		"detailimg":[
				require('assets/img/goods/vest2a.jpg'),
				require('assets/img/goods/vest2b.jpg'),
				require('assets/img/goods/vest2c.jpg'),
				require('assets/img/goods/vest2d.jpg'),
			]
		},
	{
		"id":18,
		"title":"运动棒球服春秋季飞行员夹克新款外套男潮ins薄款衣服",
		"type":"news",
		"class":"jackets",
		"img":require('assets/img/goods/jacket1.jpg'),
		"price":'79.00',
		"like":'543',
		"detailimg":[
				require('assets/img/goods/jacket1a.jpg'),
				require('assets/img/goods/jacket1b.jpg'),
				require('assets/img/goods/jacket1c.jpg'),
				require('assets/img/goods/jacket1d.jpg'),
			]
		},
	{
		"id":19,
		"title":"垂感坠感百搭小西裤男夏季直筒宽松男士九分休闲西装裤子",
		"type":"sell",
		"class":"slacks",
		"img":require('assets/img/goods/slacks1.jpg'),
		"price":'138.00',
		"like":'3830',
		"detailimg":[
					  require('assets/img/goods/slacks1a.jpg'),
					  require('assets/img/goods/slacks1b.jpg'),
					  require('assets/img/goods/slacks1c.jpg'),
					  require('assets/img/goods/slacks1d.jpg'),
		]
	},
	{
		"id":20,
		"title":"直筒百搭男夏季宽松男士九分休闲运动裤子",
		"type":"pop",
		"class":"slacks",
		"img":require('assets/img/goods/slacks2.jpg'),
		"price":'128.00',
		"like":'2639',
		"detailimg":[
					  require('assets/img/goods/slacks2a.jpg'),
					  require('assets/img/goods/slacks2b.jpg'),
					  require('assets/img/goods/slacks2c.jpg'),
					  require('assets/img/goods/slacks2d.jpg'),
		]
	},
	{
		"id":21,
		"title":"韩版西裤男夏季薄款垂感直筒宽松西装休闲百搭裤子九分裤",
		"type":"news",
		"class":"slacks",
		"img":require('assets/img/goods/slacks3.jpg'),
		"price":'128.00',
		"like":'1352',
		"detailimg":[
					  require('assets/img/goods/slacks3a.jpg'),
					  require('assets/img/goods/slacks3b.jpg'),
					  require('assets/img/goods/slacks3c.jpg'),
					  require('assets/img/goods/slacks3d.jpg'),
		]
	},
	{
		"id":22,
		"title":"韩版宽松潮流设计感垂感直筒西裤男春季百搭西装休闲裤",
		"type":"news",
		"class":"slacks",
		"img":require('assets/img/goods/slacks4.jpg'),
		"price":'129.00',
		"like":'13',
		"detailimg":[
					  require('assets/img/goods/slacks4a.jpg'),
					  require('assets/img/goods/slacks4b.jpg'),
					  require('assets/img/goods/slacks4c.jpg'),
					  require('assets/img/goods/slacks4d.jpg'),
		]
	},
	{
		"id":23,
		"title":"运动抽绳卫裤直筒春夏季灰色宽松束脚休闲裤子男潮纯棉",
		"type":"pop",
		"class":"slacks",
		"img":require('assets/img/goods/slacks5.jpg'),
		"price":'129.00',
		"like":'38',
		"detailimg":[
					  require('assets/img/goods/slacks5a.jpg'),
					  require('assets/img/goods/slacks5b.jpg'),
					  require('assets/img/goods/slacks5c.jpg'),
					  require('assets/img/goods/slacks5d.jpg'),
		]
	},
	{
		"id":24,
		"title":"自制灰色束脚卫裤男春季潮牌直筒宽松潮流抽绳休闲裤运动裤子",
		"type":"sell",
		"class":"slacks",
		"img":require('assets/img/goods/slacks6.jpg'),
		"price":'158.00',
		"like":'16',
		"detailimg":[
					  require('assets/img/goods/slacks6a.jpg'),
					  require('assets/img/goods/slacks6b.jpg'),
					  require('assets/img/goods/slacks6c.jpg'),
					  require('assets/img/goods/slacks6d.jpg'),
		]
	},
	{
		"id":25,
		"title":"自制韩版潮流宽松百搭休闲裤春季男女情侣款抽绳束脚运动卫裤",
		"type":"pop",
		"class":"slacks",
		"img":require('assets/img/goods/slacks7.jpg'),
		"price":'158.00',
		"like":'178',
		"detailimg":[
					  require('assets/img/goods/slacks7a.jpg'),
					  require('assets/img/goods/slacks7b.jpg'),
					  require('assets/img/goods/slacks7c.jpg'),
					  require('assets/img/goods/slacks7d.jpg'),
		]
	},
	{
		"id":26,
		"title":"宽松休闲裤男夏季直筒西装裤阔腿垂感九分裤子西裤薄款",
		"type":"sell",
		"class":"slacks",
		"img":require('assets/img/goods/slacks8.jpg'),
		"price":'138.00',
		"like":'110',
		"detailimg":[
					  require('assets/img/goods/slacks8a.jpg'),
					  require('assets/img/goods/slacks8b.jpg'),
					  require('assets/img/goods/slacks8c.jpg'),
					  require('assets/img/goods/slacks8d.jpg'),
		]
	},
	{
		"id":27,
		"title":"2021新款潮流牛仔短裤男士夏季宽松休闲五分裤外穿裤子",
		"type":"news",
		"class":"slacks",
		"img":require('assets/img/goods/slacks9.jpg'),
		"price":'108.00',
		"like":'34',
		"detailimg":[
					  require('assets/img/goods/slacks9a.jpg'),
					  require('assets/img/goods/slacks9b.jpg'),
					  require('assets/img/goods/slacks9c.jpg'),
					  require('assets/img/goods/slacks9d.jpg'),
		]
	},
	{
		"id":28,
		"title":"复古格子裤男春季直筒宽松九分裤小脚西裤潮流休闲裤子",
		"type":"sell",
		"class":"slacks",
		"img":require('assets/img/goods/slacks10.jpg'),
		"price":'148.00',
		"like":'41',
		"detailimg":[
					  require('assets/img/goods/slacks10a.jpg'),
					  require('assets/img/goods/slacks10b.jpg'),
					  require('assets/img/goods/slacks10c.jpg'),
					  require('assets/img/goods/slacks10d.jpg'),
		]
	},
	{
		"id":29,
		"title":"自制短裤男士潮流百搭夏季外穿休闲西装裤子运动宽松5五分裤",
		"type":"pop",
		"class":"slacks",
		"img":require('assets/img/goods/slacks11.jpg'),
		"price":'128.00',
		"like":'20',
		"detailimg":[
					  require('assets/img/goods/slacks11a.jpg'),
					  require('assets/img/goods/slacks11b.jpg'),
					  require('assets/img/goods/slacks11c.jpg'),
					  require('assets/img/goods/slacks11d.jpg'),
		]
	},
	{
		"id":30,
		"title":" 潮牌运动休闲裤短裤男夏季薄款韩版宽松直筒五分裤裤子",
		"type":"news",
		"class":"slacks",
		"img":require('assets/img/goods/slacks12.jpg'),
		"price":'108.00',
		"like":'89',
		"detailimg":[
					  require('assets/img/goods/slacks12a.jpg'),
					  require('assets/img/goods/slacks12b.jpg'),
					  require('assets/img/goods/slacks12c.jpg'),
					  require('assets/img/goods/slacks12d.jpg'),
		]
	},
]

export default goods