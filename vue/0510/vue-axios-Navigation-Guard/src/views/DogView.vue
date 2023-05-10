<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="">
    <br>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'DogView',
  data() {
    return {
      imgSrc: null,
      message: '..로딩중..'
    }
  },
  methods: {
    getDogImage() {
      const breed = this.$route.params.breed
      const dogImageSearchURL = `https://dog.ceo/api/breed/${breed}/images/random`

      axios({
        method : 'GET',
        url: dogImageSearchURL
      })
      .then((res) => {
        console.log(res)
        const dogImg = res.data.message
        this.imgSrc = dogImg
      })
      .catch((err)=>{
        console.log(err)
        // this.message = `${this.$route.params.breed}는 없는 품종입니다.`
        this.$router.push('/404')
      })
    }
  },
  created() {
    this.getDogImage()
  }
}
</script>

<style>

</style>