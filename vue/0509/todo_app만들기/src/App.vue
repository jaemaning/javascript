<template>
  <div id="app">
    <div class="all-box d-flex">
      <SideBar/>
      <div class="main-box">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  name: "APP",
  components: {
    SideBar,
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
  padding: 30px;
}

.main-box {
  width: 60vw;
  border: solid black 2px;
  border-radius: 5px;
  height: 80vh;
  margin-left: 2vw;
  padding: 30px;
  text-align: left;
}

</style>
