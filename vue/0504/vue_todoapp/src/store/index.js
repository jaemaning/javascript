import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: '할일 1',
        isCompleted: false,
      },
      {
        title: '할일 2',
        isCompleted: false,
      },
    ]
  },
  getters: {
  },
  mutations: {
    create_todo(state, todoItem) {
      state.todos.push(todoItem)
    }
  },
  actions: {
    createTodo(context, todoTitle) {
      const todoItem = {
        title: todoTitle,
        isCompleted: false,
      }
      context.commit('create_todo',todoItem)
    }
  },
  modules: {
  }
})
