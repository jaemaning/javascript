<template>
  <div class="wrap">
    <h5>시작</h5>
    <div class="d-flex">
      <div @click="toHome" class="prev btn btn-secondary"><span>이전</span></div>
      <div><img src="../assets/happeed.png" alt="" class="image"></div>
      <div @click="toSsafling" class="next btn btn-secondary"><span>다음</span></div>
    </div>
    <h5>해피드</h5>
  </div>
</template>

<script>
export default {
  name: 'HappeedView',
  methods: {
    toHome() {
      this.$router.push({ name: "home" })
    },
    toSsafling() {
      this.$router.push({ name: 'ssafling'})
    }
  }
}
</script>

<style>
.image {
  width: 200px;
}

.prev, .next {
  height: 40px;
  /* align-items: center; */
  margin: auto;
  line-height: 40px;
}

.wrap {
  margin-top: 50px;
  text-align: center;
  padding: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px ;
}

</style>