<template>
  <div>
    <h2>2. 사이즈를 고르세요.</h2>
    <SizeListItem v-for="(size, idx) in sizeList" :key="idx" :size="size"/>
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';

export default {
  name: 'SizeList',
  methods: {
  //   onSelectMenu: function () {},
  },
  components: {
    SizeListItem,
  },
  computed: {
    sizeList() {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>