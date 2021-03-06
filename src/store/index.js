import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    cartList:[],
    user:[],
    token:'',
  },
  mutations:{
    add_to_cart(state,payload){
      payload.count = 1
      payload.checked = true
      state.cartList.push(payload)
    },
    add_count(state, payload){
      payload.count++
    },
    setToken(state,paload){
      state.token = paload
    }

    

  },
  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject)=>{
        let oldproduct = context.state.cartList.find(item=>item.iid==payload.iid)
        if (oldproduct){
          context.commit('add_count',oldproduct)
        }else{
          context.commit('add_to_cart',payload)
        }
      })
    }
  },
  getters:{
    cartLength(state){
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    }
  }
})
export default store