import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    orderList: {menu: 0, size: 0},
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '아이스 아메리카노',
        price: 3500,
        selected: false, // 초기값
        image: 'https://source.unsplash.com/featured/?iceamericano'
      },
      {
      title: '카페라떼',
      price: 4000,
      selected: false, // 초기값
      image: 'https://source.unsplash.com/featured/?cafelatte'
      },
      {
      title: '아이스티',
      price: 4500,
      selected: false, // 초기값
      image: 'https://source.unsplash.com/featured/?icetee'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: false, //초기값
      },
      {
        name: 'medium',
        price: 1000,
        selected: false, //초기값
      },
      {
        name: 'large',
        price: 1500,
        selected: false, //초기값
      },
    ],
  },
  getters: {
    
  },
  mutations: {
    addOrder(state) {
      const new_orderList = {...state.orderList}
      state.cart.push(new_orderList)
      // 음료, 사이즈 초기화 시키고 싶음.
    },
    updateMenuList (state, menu) {
      state.menuList.forEach(element => {
        if (element.title === menu.title) {
          element.selected = true
          state.orderList.menu = menu
        } else {
          element.selected = false
        }
      });
    },
    updateSizeList(state, size) {
      state.sizeList.forEach(element=>{
        if (element.name === size.name) {
          element.selected = true
          state.orderList.size = size
        } else {
          element.selected = false
        }
      })
    },
  },
  actions: {
    choiceMenu(context, menu){
      const choiceOne = menu
      context.commit('updateMenuList', choiceOne)
    }
  },
  modules: {
  }
})