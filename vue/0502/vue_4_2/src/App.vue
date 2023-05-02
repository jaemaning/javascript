<template>
  <div id="app">
    <h1>SSAFY 상담 예약 시스템</h1>
    <div class="d-flex pt-5">
      <div class="left-side w-50">
        <h2 class="p-1">예약 페이지</h2>
        <h3 class="p-1">선생님 선택</h3>
        <div class="d-flex justify-content-evenly p-1">
          <button :class="{selected:teacher=='Tony'}" class="pBtn" @click="clickTeacher('Tony')">Tony</button>
          <button :class="{selected:teacher=='Eric'}" class="pBtn" @click="clickTeacher('Eric')">Eric</button>
        </div>
        <hr>
        <h3>시간 선택</h3>
        <br>
        <div>
          <button class="button m-1 col-2" :class="{selected:timeSelect.includes(time)}" v-for="(time, idx) in times" :key="idx" @click="clickTime(time)">{{ time }}</button>
        </div>


      </div>
      <div class="right-side w-50">
        <h2 class="p-1">상담 신청 현황</h2>
        <h3 class="p-1">상담 선생님</h3>
        <p class="p-1">성함 : <span>{{ teacher }}</span></p>
        <hr>
        <h3>예약 현황</h3>
        <p>시간들 : <span v-for="time in timeSelect" :key="time">{{ time }} &nbsp;&nbsp;</span></p>
        <hr>
        <img alt="SSAFY logo" src="./assets/ssafy-logo.png">
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
    times: [
      "09:00","09:30","10:00","10:30","11:00","11:30",
      "12:00","12:30","13:00","13:30","14:00","14:30",
      "15:00","15:30","16:00","16:30","17:00","17:30",
    ],
    timeSelect: [

    ],
    teacher: "",
    }
  },
  methods: {
    clickTime(time) {
      if (this.timeSelect.includes(time)) {
        this.timeSelect.splice(this.timeSelect.indexOf(time), 1)
      } else {
        if (this.timeSelect.length >= 5) {
          alert("5개까지만 선택 할 수 있습니다.")
          return
        } else {
          this.timeSelect.push(time)
        }
      }
    },
    clickTeacher(str) {
      this.teacher = str
    }
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
.pBtn {
  border: solid cornflowerblue 2px;
  background-color: white;
  width: 70px;
  height: 40px;
  text-align: center;
  line-height: 32px;
}
.button {
  background-color: white;
  border: none;
  color: #424242;
}
.selected {
  background-color: #dae4f1;
  color: #0F4C81;
}
hr {
  width: 80%;
  margin: 20px auto !important;
  border: solid #7699ba 1px;
}
.right-side {
  background-color: #dae4f1;
}
/* #dae4f1 */
</style>
