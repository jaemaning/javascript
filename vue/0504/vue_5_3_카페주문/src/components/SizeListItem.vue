<template>
  <div class="d-flex justify-content-between menu-box" :class="{selected:size.selected}" @click="sizeChoice(size)">
    <span>{{ size.name }}</span>
    <span>{{ size.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods: {
    sizeChoice(size) {
      console.log(size)
      this.$store.commit('updateSizeList', size)
    }
  }
}
</script>

<style>

.menu-box {
  margin: 20px auto;
  border: solid 1px black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  line-height: 50px;
  width: 90%;
}

.menu-box:hover {
  background-color: darkcyan;
  color: white;
  cursor: pointer;
}

.selected {
  background-color: #43936c;
  color: #eee;
}


</style>