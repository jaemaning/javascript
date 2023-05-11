<template>
  <div>
    <input 
      type="text" 
      v-model.trim="title" 
      @keyup.enter="createTodo"
    >
    <button @click="createTodo">+</button>
  </div>
</template>

<script>
import axios from 'axios'
// import axios from'axios'
const AXIOS_URL = `http://127.0.0.1:8000/todos/`

export default {
  name: 'CreateTodo',
  data: function () {
    return {
      title: null,
    }
  },
  methods: {
    createTodo: function () {
      // 2번 문제
      if (!this.title) {
        alert('글을 작성하세요.')
        return
      }

      axios({
        method: 'POST',
        url: AXIOS_URL,
        data: {title: this.title}
      })
      .then(()=> {
        this.$router.push({name:'TodoList'})
      })
      .catch((err)=>{
        console.log(err)
      })
      return
    }
  }
}
</script>
