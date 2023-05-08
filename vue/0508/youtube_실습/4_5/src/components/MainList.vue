<template>
  <div>
    <div v-for="(video, idx) in videosData" :key="idx">
      <div class="d-flex justify-content-between">
        <img :src="video.thumbnail" alt="#">
        {{ video.title }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "MainList",
  props: {
    youtubeVideos: Array,
  },
  computed : {
    videosData() {
      let temp = []
      this.youtubeVideos.forEach(element => {
        let temp_data1 = _.unescape(element.snippet.title)
        let temp_data2 = element.snippet.thumbnails.default.url
        temp.push({'title': temp_data1, 'thumbnail': temp_data2})
      });
      return temp
    }
  }
}
</script>

<style>

</style>