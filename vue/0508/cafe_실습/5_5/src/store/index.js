import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    orderList: {
      menu: 0, 
      size: 0,
      option0: {
        type: '샷 추가',
        price: 500,
        count: 0,
      },
      option1: {
        type: '바닐라 시럽',
        price: 500,
        count: 0,
      },
      option2: {
        type: '헤이즐넛 시럽',
        price: 500,
        count: 0,
      },
    },
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
    optionList: [
      {
        type: '샷 추가',
        price: 500,
        count: 0,
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count: 0,
      },
      {
        type: '헤이즐넛 시럽',
        price: 500,
        count: 0,
      },
     ],
  },
  getters: {
    
  },
  mutations: {
    addOrder(state) {
      // javascript 객체 깊은 복사(deep copy 방법)
      const new_orderList = JSON.parse(JSON.stringify(state.orderList));
      state.cart = new_orderList

      //세션 스토리지에 값을 저장하는 코드.
      const sessionData = sessionStorage.getItem('cartSession') ? sessionStorage.getItem('cartSession') : "[]"
      console.log(`세션 값 ${sessionData}`)
      const newData = JSON.parse(sessionData)
      newData.push(state.cart)
      const cartToSessionStorage = sessionData ? JSON.stringify(newData) : JSON.stringify(state.cart)
      sessionStorage.setItem('cartSession', cartToSessionStorage)

      // 음료, 사이즈, 옵션 초기화 시키고 싶음.
      state.orderList.menu.selected = false
      state.orderList.size.selected = false

      for (let i=0;i<3;i++) {
        state.orderList[`option${i}`].count = 0
        state.optionList[i].count = 0
      }
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
    
    updateOptionList(state, option) {
      // flag == 0 이면 ++ , flag == 1 이면 --
      if (option.flag) {
        if (option.count == 0) {
          return
        }
        state.optionList.forEach((element, idx)=>{
          if (element.type == option.type) {
            element.count --
            state.orderList[`option${idx}`].count --
            console.log(state.orderList)
          }
        })
      } else {
        state.optionList.forEach((element, idx)=>{
          if (element.type == option.type) {
            element.count ++
            state.orderList[`option${idx}`].count ++
            console.log(state.orderList)
          }
        })
      }
    }
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