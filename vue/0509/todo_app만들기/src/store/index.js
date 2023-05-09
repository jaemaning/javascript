import Vue from 'vue'
import Vuex from 'vuex'
import TodoModules from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    todayList(state) {
      // 오늘
      const today = new Date().toJSON().slice(0,10);
      let result = []
      state.TodoModules.list.forEach(data=> {
        const dueDate = data.dueDateTime.slice(0,10)
        if (!data.isCompleted && dueDate === today) {
          result.push(data)
        }
      })
      return result
    },
    importantList(state) {
      const result = state.TodoModules.list.filter(data=>
        !data.isCompleted && data.isImportant
      )
      return result
    }
  },
  mutations: {
    toggleCompleted(state, id) {
      state.TodoModules.list.forEach(element => {
        if (element.id === id) {
          element.isCompleted = !element.isCompleted
        }
      });
    },
    toggleImportant(state, id) {
      state.TodoModules.list.forEach(element => {
        if (element.id === id) {
          element.isImportant = !element.isImportant
        }
      });
    },
    addData(state, data) {
      const nowDateObj = new Date()
      state.TodoModules.list.push(
        {
          id: nowDateObj.getTime(),                // nowDateObj.getTime()
          content: data,                   // Todo 내용
          dueDateTime: nowDateObj.toJSON().slice(0, 10) + 'T00:00',  // 마감일
          isCompleted: false,               // 완료된 할 일
          isImportant: false,	
        }
      )
    },
    addImportantData(state, data) {
      const nowDateObj = new Date()
      state.TodoModules.list.push(
        {
          id: nowDateObj.getTime(),                // nowDateObj.getTime()
          content: data,                   // Todo 내용
          dueDateTime: nowDateObj.toJSON().slice(0, 10) + 'T00:00',  // 마감일
          isCompleted: false,               // 완료된 할 일
          isImportant: true,	
        }
      )
    },
    changeUpdate(state, changeData) {
      state.TodoModules.list.forEach(element=>{
        if (element.id == changeData.id) {
          element.content = changeData.content
          element.dueDateTime = changeData.dueDateTime
        }
      })
    }
  },
  actions: {
  },
  modules: {
    TodoModules
  }
})
