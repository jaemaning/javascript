<template>
  <div id="app">
    <h1>Todo</h1>
    <h1>총 : {{ alltodosCount }}</h1>
    <h1>완료 : {{ completedTodosCount }}</h1>
    <h1>남은 : {{ havetoTodosCount }}</h1>
    <TodoForm/>
    <TodoList />
    <button @click="loadTodos">불러오기</button>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  methods: {
    loadTodos() {
      this.$store.dispatch('loadTodos')
    }
  },
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    alltodosCount() {
      return this.$store.getters.alltodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    havetoTodosCount() {
      return this.$store.getters.havetoTodosCount
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
