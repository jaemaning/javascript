import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCount(state) {
      return state.counter * 2
    }
  },
  mutations: {
    increment(state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    }
  },
  actions: {
  },
  modules: {
  }
})
