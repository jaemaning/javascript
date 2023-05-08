<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <input type="text" v-model="searchData" @keyup.enter="searchVideos">
    <button @click="searchVideos">검색</button>
    <Main :youtube-q="searchQ"/>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
      searchData: null,
      searchQ: null,
    }
  },
  methods: {
    searchVideos() {
      if (this.searchData) {
        this.searchQ = this.searchData
        this.searchData = null
      } else {
        alert("검색어를 입력하세요.")
      }
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
