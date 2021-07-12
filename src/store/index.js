import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		cartList:[]
  },
  mutations: {
		addCart(state,payload){
			let oldProduct = null;
			for(let item of state.cartList){
				item.allprice = parseInt(item.price)*item.num
				if(item.id === payload.id){
					oldProduct = item;
				}
			}
			
			if(oldProduct){
				oldProduct.num += 1
				oldProduct.allprice = parseInt(oldProduct.price)*oldProduct.num
			}else{
				state.cartList.push(payload)
			}	
		},
		delCart(state,id){
			state.cartList.forEach((item,index) => {
				if(item.id === id){
					state.cartList.splice(index,1)
					return 0
				}
			})
		}
  },
  actions: {
  },
  modules: {
  },
  getters:{
	  cartList(state){
	  	return state.cartList
	  },
	  sumprice(state){
		  let sumprice=0
		  for(let item of state.cartList){
		  	sumprice += item.allprice
		  }
		  return sumprice
	  }
  }
})
