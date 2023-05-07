<template>
  <div class="d-flex justify-content-between option-box">
    <span>{{ option.type }}</span>
    <div>
      <span class="btn option-btn" @click="decrease(option)">-</span>
      <span>{{ option.count }}</span>
      <span class="btn option-btn" @click="increase(option)">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase(option) {
      option['flag'] = 0
      this.$store.commit('updateOptionList', option)
    },
    decrease(option) {
      option['flag'] = 1
      this.$store.commit('updateOptionList', option)
    },
  },
}
</script>

<style scoped>

.option-box {
  margin: 20px auto;
  border: solid 1px black;
  border-radius: 3px;
  padding: 5px;
  text-align: center;
  line-height: 50px;
  width: 90%;
}

.option-btn {
  border: solid black 1px;
  border-radius: 20px;
  padding: 4px 11px;
  margin: 0px 8px ;
  font-weight: bold;
  font-size: large;
  background-color: #eee;
}

.option-btn:hover {
  background-color: floralwhite;
  border: solid black 1px;
}

</style>