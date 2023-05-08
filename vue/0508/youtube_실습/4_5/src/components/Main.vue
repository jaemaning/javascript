<template>
  <div class="d-flex">
    <div v-if="videoCheck" class="w-75">
      <!-- 비디오 보여주기 -->
      비디오 선택됨
    </div>
    <div v-else class="w-75">
      선택된 비디오가 없습니다!
    </div>
    <div>
      <MainListVue class="w-25" :youtube-videos="videos"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MainListVue from './MainList.vue'

export default {
  name: "MainVue",
  components: {
    MainListVue,
  },
  data() {
    return {
      url: 'https://www.googleapis.com/youtube/v3/search',
      videos: [],
      selectedVideo: {}
    }
  },
  computed: {
    videoSrc() {
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
    },
    videoCheck() {
      return this.selectedVideo === {} ? true : false
    },
    // 목록부터 띄우고 목록에서 클릭하면 동작하게 하자
    // selectVideo() {

    // }
  },
  props: {
    youtubeQ: String
  },
  watch: {
    youtubeQ(data) {
      // 여기서 axios 요청
      axios({
        method: "GET",
        url: this.url,
        params: {
          key: process.env.VUE_APP_YOUTUBE_API_KEY,
          part: 'snippet',
          type: 'video',
          q: data,
        }
      })
      .then((res)=>{
        console.log(res.data.items)
        this.videos = res.data.items
      })
    }
  }
}
</script>

<style>

</style>