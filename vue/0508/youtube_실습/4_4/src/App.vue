<template>
  <div id="app">
    <div class="container">
      <div class="d-flex justify-content-center">
        <h1 class="mt-3">SSAFY TUBE</h1>
      </div>
      <div class="mt-3" v-if="isSelectedVideo" style="min-height:100vh">
        <div class="ratio ratio-16*9" style="height:500px">
          <iframe :src="videoSrc" frameborder="0"></iframe>
        </div>
        <div>
          <h4>
            제목 : {{videoTitle}}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VUE_APP_YOUTUBE_API_KEY from '../.env.local'
import _ from "lodash"
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      url: 'https://www.googleapis.com/youtube/v3/search',
      key: process.env.VUE_APP_YOUTUBE_API_KEY,
      videos: [],
      selectedVideo: {}
    }
  },
  computed:{
    videoSrc() {
      return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
    },
    videoTitle() {
      return _.unescape(this.selectedVideo.snippet.title)
    },
    isSelectedVideo() {
      if (Object.keys(this.selectedVideo).length) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    axios({
      method: "GET",
      url: this.url,
      params: {
        key: this.key,
        part: 'snippet',
        type: 'video',
        q: '코딩'
      }
    })
    .then((res)=>{
      console.log(res.data)
      this.videos = res.data.items
      this.selectedVideo = this.videos[0]
      console.log(this.selectedVideo)
    })
    .catch((error)=> {
      console.log(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>



