<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div class="d-flex flex-column w-50 m-auto">
      <h2>예약 페이지</h2>
      <h3>시간 선택</h3>
      <div class="d-flex flex-wrap justify-content-evenly">
        <button class="button m-1 col-2" :class="{selected:timeSelect[idx]}" v-for="(time, idx) in times" :key="idx" @click="clickBtn(time, idx)">{{ time }}</button>
      </div>
      <hr>
      <p class="font-weight-bold">선택 시간: &nbsp; <span v-for="time in timesCheck" :key="time">{{ time }} &nbsp;&nbsp; </span></p>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data() {
    return {times: [
  "00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
  "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
], timesCheck: [

], timeSelect: new Array(48).fill(false)}
  },
  methods: {
    clickBtn(time, idx) {
      if (this.timesCheck.includes(time)) {
          this.timesCheck.splice(this.timesCheck.indexOf(time), 1) // this.timesCheck.indexOf('time')
          this.timeSelect.splice(idx, 1, false)
        } else {
          if (this.timesCheck.length == 5) {
            alert("5타임까지만 신청할 수 있습니다.")
            return
          } else {
              this.timesCheck.push(time)
              this.timeSelect.splice(idx, 1, true)
            }
        }
      console.log(this.timeSelect)
    }
  },
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
.button {
  background-color: white;
  border: none;
  color: #424242;
}
.selected {
  background-color: powderblue;
  color: #0F4C81;
}
p {
  font-weight: bold;
}
</style>
