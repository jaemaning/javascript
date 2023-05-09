<template>
  <nav class="side-bar d-flex flex-column">
    <router-link :to="{name: 'all'}">모든</router-link>
    <router-link :to="{name: 'today'}">오늘</router-link>
    <router-link :to="{name: 'important'}">중요</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

.side-bar {
  width: 20vw;
  border: solid black 2px;
  border-radius: 5px;
  text-align: center;
  height: 80vh;
  margin-left: 5vw;
  padding-top: 30px;
}

.side-bar > a {
  padding: 5px;
  text-decoration: none;
  font-size: 24px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

</style>