<template>
  <div>
    <h2>3. 옵션을 고르세요.</h2>
    <OptionListItem v-for="(option, idx) in optionList" :key="idx" :option="option"/>
  </div>
</template>

<script>
import OptionListItem from './OptionListItem.vue';

export default {
  name: 'OptionList',
  components: {
    OptionListItem,
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList
    },
  },
  methods: {
    // increase: function () {
    // },
    // decrease: function () {
    // },
  },
}
</script>

<style>
</style>