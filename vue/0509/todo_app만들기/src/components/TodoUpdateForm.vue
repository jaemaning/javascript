<template>
  <div>
    <div class="update-box d-flex flex-column">
      <p class="btn btn-success w-50" @click="updateData">수정하기</p>
      <input type="text" v-model="content" class="mt-1 mb-1">
      <input type="datetime-local" v-model="dueDate">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpdateForm',
  props: {
    todo: Object,
    idx: Number
  },
  data () {
    return {
      content: this.todo.content,
      dueDate: this.todo.dueDateTime
    }
  },
  methods: {
    updateData() {
      const AllUpdateData = {
        id: this.todo.id,                // nowDateObj.getTime()
        content: this.content,                   // Todo 내용
        dueDateTime: this.dueDate,  // 마감일
        isCompleted: false,               // 완료된 할 일
        isImportant: false,				        // 중요 할 일
      }

      this.$store.commit('changeUpdate', AllUpdateData)
      // console.log(this.idx)
      this.$emit('changeFormCheck', this.idx)

    }
  }
}
</script>

<style>

.update-box {
  padding: 10px;
  background-color: lightcyan;
  margin: 10px 0px 10px ;
  border-radius: 5px;
}

</style>