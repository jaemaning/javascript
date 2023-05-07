// App.vue

<template>
  <div id="app">
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App', 
  methods: {
    increase: function () {
      // 데이터 직접조작 가능하지만 하지말라고 했다.
      // this.$store.state.counter ++

      // 데이터는 따로 넘기지 않아도 됨.
      // mutations 바로 조작하지 않고 actions 로 거쳐서 가는 방법이 있지만
      // state 데이터 1증가만 시키는 것이니 바로 mutations로 commit 쏘기.
      this.$store.commit('increment')
    },
    decrease: function () {
      this.$store.commit('decrement')
    },
  },
  computed: {
    // store 에 있는 getters 값 가져오기
    counterDouble () {
      return this.$store.getters.doubleCount
    },
    // store 에 있는 state 값 가져오기
    counter () {
      return this.$store.state.counter
    }
  },
}
</script>

<style>
</style>