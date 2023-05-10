<template>
  <div class="wrap">
    <h5>3단계</h5>
    <div class="d-flex">
      <div @click="upAlert" class="prev btn btn-secondary"><span>이전</span></div>
      <div><img src="../assets/happlower.png" alt="" class="image"></div>
      <div @click="toHome" class="next btn btn-secondary"><span>다음</span></div>
    </div>
    <h5>싸플라워</h5>
  </div>
</template>

<script>
export default {
  name: 'SsaflowerView',
  methods: {
    upAlert() {
      alert('이전 진화 단계로 돌아갈 수 없습니다.')
    },
    toHome(){
      alert('Home으로 돌아갑니다!')
      this.$router.push({name:'home'})
    }
  },
}
</script>

<style>

</style>