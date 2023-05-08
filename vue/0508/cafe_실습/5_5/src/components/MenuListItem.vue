<template>
  <div class="d-flex justify-content-between menu-box" :class="{selected:menu.selected}" @click="selectMenu(menu)">
    <img :src="menu.image" alt="#">
    <span>{{ menu.title }}</span>
    <span>{{ menu.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    selectMenu(menu) {
      this.$store.dispatch('choiceMenu', menu)
    },
  }
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}

.span {
  font-weight: bold;
}
</style>