<template>
  <div id="app">
    <Home/>
    <About/>
  </div>
</template>

<script>
import About from '@/components/About.vue'
import Home from '@/components/Home.vue'

export default {
  name: 'App',
  components: {
    About,
    Home
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
