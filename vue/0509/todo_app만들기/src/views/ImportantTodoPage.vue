<template>
  <div>
    <h1>중요 할일</h1>
    <div class="add-box">
      <p style="margin: auto;" class="btn btn-center" @click="addImportantData">+</p>
      <input style="width:50%;" type="text" @keyup.enter="addImportantData" v-model="inputData">
    </div>
    <hr>
    <div v-for="(todo, idx) in list" :key="idx" class="todoBox d-flex justify-content-between">
      <!-- {{ list }} -->
      <div @click="todoCheck(todo.id)" class="btn btn-secondary">
        <span v-if="todo.isCompleted">o</span>
        <span v-else>x</span>
      </div>
      {{ todo.content }}
      <div @click="importantCheck(todo.id)" class="btn btn-secondary">
        <span v-if="todo.isImportant">중요!</span>
        <span v-else>안중요!</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImportantTodo",
  data() {
    return {
      inputData: null
    }
  },
  methods: {
    addImportantData() {
      this.$store.commit('addImportantData', this.inputData)
      this.inputData = null
    },
    todoCheck(id) {
      this.$store.commit('toggleCompleted', id)
    },
    importantCheck(id) {
      this.$store.commit('toggleImportant', id)
    },
  },
  computed: {
    list() {
      return this.$store.getters.importantList
    }
  }
}
</script>

<style>

</style>