<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
          @click="updateTodoStatus(todo)" 
          :class="{ 'is-completed': todo.is_completed }"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)" class="todo-btn">X</button>
      </li>
    </ul>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import axios from 'axios'
const AXIOS_URL = `http://127.0.0.1:8000/todos/`

export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: null,
    }
  },
  created() {
    this.getTodos()
  },
  methods: {
    getTodos: function () {
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos',
      })
        .then(res => {
          console.log(res)
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTodo: function (todo) {
      // 3번 문제
      console.log(todo.id)
      axios({
        method: 'DELETE',
        url: `${AXIOS_URL}${todo.id}/`
      })
      .then((res)=>{
        console.log(res)
        this.getTodos()
      })
      .catch((err)=>{
        console.log(err)
      })
      return
    },
    updateTodoStatus: function (todo) {
      // 4번 문제
      console.log(todo)
      const changeIsCompleted = todo.is_completed
      const originTitle = todo.title

      axios({
        method: 'PUT',
        url: `${AXIOS_URL}${todo.id}/`,
        data: {
          title: originTitle,
          is_completed: !changeIsCompleted
        }
      })
      .then(()=>{
        this.getTodos()
      })
      .catch((err)=>{
        console.log(err)
      })

      return
    },
  },
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .is-completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
