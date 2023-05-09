<template>
  <div>
    <h1>모든 할일</h1>
    <div class="add-box">
      <p style="margin: auto;" class="btn btn-center" @click="addData">+</p>
      <input style="width:50%;" type="text" @keyup.enter="addData" v-model="inputData">
    </div>
    <hr>
    <div v-for="(todo, idx) in list" :key="idx">
      <!-- {{ list }} -->
      <div class="todoBox d-flex justify-content-between">
        <div @click="todoCheck(todo.id)" class="btn btn-secondary">
          <span v-if="todo.isCompleted">o</span>
          <span v-else>x</span>
        </div>
        <p @click.stop="updateForm(idx)">{{ todo.content }}</p>
        <div @click="importantCheck(todo.id)" class="btn btn-secondary">
          <span v-if="todo.isImportant">중요!</span>
          <span v-else>안중요!</span>
        </div>
      </div>
      <div v-show="updateCheck[idx]">
        <TodoUpdateFormVue :todo="todo" :idx="idx" @changeFormCheck="closeForm"/>
      </div>
    </div>
  </div>
</template>

<script>
import TodoUpdateFormVue from '@/components/TodoUpdateForm.vue'

export default {
  name: "AllTodoPage",
  data() {
    return {
      inputData: null,
      updateCheck: new Array(10).fill(false)
    }
  },
  components: {
    TodoUpdateFormVue,
  },
  computed: {
    list() {
      return this.$store.state.TodoModules.list
    },
    // updateCheck() {
    //   const result = new Array(this.list.length).fill(false)
    //   console.log(result)
    //   return result
    // },
  },

  methods: {
    todoCheck(id) {
      this.$store.commit('toggleCompleted', id)
    },
    importantCheck(id) {
      this.$store.commit('toggleImportant', id)
    },
    addData() {
      this.$store.commit('addData', this.inputData)
      this.inputData = null
    },
    updateForm(idx) {
      this.updateCheck.splice(idx, 1, !this.updateCheck[idx])
    },
    closeForm(idx) {
      this.updateCheck.splice(idx, 1, !this.updateCheck[idx])
    }
  }
}
</script>

<style>

.todoBox {
  width: 100%;
  border: solid #eee 1px;
  border-radius: 3px;
  padding: 20px;
  margin-top: 10px;
}

.add-box {
  padding: auto;
  margin:auto;
}

</style>