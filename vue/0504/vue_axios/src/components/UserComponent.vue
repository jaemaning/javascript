<template>
  <div>
    <h1>username: {{ user.username }}</h1>
    <h2>email: {{ user.email }}</h2>
  </div>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    user: Object,
  }
}
</script>

<style>

</style>