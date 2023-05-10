<template>
  <div class="wrap">
    <h5>1단계</h5>
    <div class="d-flex">
      <div @click="upAlert" class="prev btn btn-secondary"><span>이전</span></div>
      <div><img src="../assets/happling.png" alt="" class="image"></div>
      <div @click="toSsafleaf" class="next btn btn-secondary"><span>다음</span></div>
    </div>
    <h5>싸플링</h5>
  </div>
</template>

<script>
export default {
  name: 'SsaflingView',
  methods: {
    upAlert() {
      alert('이전 진화 단계로 돌아갈 수 없습니다.')
    },
    toSsafleaf() {
      this.$router.push({ name: 'ssafleaf'})
    }
  }
}
</script>

<style>

</style>