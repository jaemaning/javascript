<template>
  <div>
    <TodoListItem v-for="(todo, idx) in todos" :key="idx" :todo-item="todo"/>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoListItem,
  },
  computed: {
    todos() {
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>