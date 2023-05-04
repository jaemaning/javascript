import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
  },
  mutations: {
    SET_USERS(state, usersdata) {
      usersdata.forEach((user)=>{
        state.users.push(user)
      })
    }
  },
  actions: {
    getUsers(context, num) {
      axios.get(`https://random-data-api.com/api/v2/users?size=${num}`)
      .then((res)=>{
        this.commit('SET_USERS', res.data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
