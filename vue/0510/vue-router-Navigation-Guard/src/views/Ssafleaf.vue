<template>
  <div>
    <div class="wrap">
    <h5>2단계</h5>
    <div class="d-flex">
      <div @click="upAlert" class="prev btn btn-secondary"><span>이전</span></div>
      <div><img src="../assets/happlossome.png" alt="" class="image"></div>
      <div @click="toSsaflower" class="next btn btn-secondary"><span>다음</span></div>
    </div>
    <h5>싸플리프</h5>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SsafleafView',
  methods: {
    upAlert() {
      alert('이전 진화 단계로 돌아갈 수 없습니다.')
    },
    toSsaflower() {
      this.$router.push({ name: 'ssaflower'})
    }
  }
}
</script>

<style>

</style>