<template>
  <div class="menu-list">
    <h1>1. 음료를 고르세요.</h1>
    <MenuListItem v-for="(menu, idx) in menuList" :key="idx" :menu="menu"/>
  </div>
</template>

<script>
import MenuListItem from './MenuListItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList() {
      return this.$store.state.menuList
    },
  },
  methods: {

  },
}
</script>

<style>

</style>