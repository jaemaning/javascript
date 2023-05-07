<template>
  <div id="app" class="container">
    <h1>Coffee Order App</h1>
    <hr>
    <div class="d-flex justify-content-evenly main-box">
      <MenuList class="sub-box"/>
      <SizeList class="sub-box"/>
      <OptionList class="sub-box"/>
    </div>
    <button class="btn2" @click="addOrder">장바구니 담기</button>
    <OrderList/>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import SizeList from './components/SizeList.vue';
import OrderList from './components/OrderList.vue';
import OptionList from './components/OptionList.vue';

export default {
  name: 'App',
  components:{
    MenuList,
    SizeList,
    OrderList,
    OptionList
  },
  methods: {
    addOrder(){
      if (!this.orderList.menu.selected) {
        alert("음료를 선택해주세요.")
      } else if (!this.orderList.size.selected) {
        alert("사이즈를 선택해주세요.")
      } else {
        this.$store.commit('addOrder')
      }
    }
  },
  computed: {
    orderList() {
      return this.$store.state.orderList
    }
  }
}
</script>


<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
  font-size: medium;
}

ul {
  list-style: none;
}

.main-box {
  background-color: #eee;
  height: 100%;
}

.sub-box {
  margin: 20px;
  padding: 30px 10px 0px 10px;
  width: 32%;
  background-color: white;
  border: solid 1px white;
  border-radius: 10px;
}

.btn2 {
  background-color: #43936c;
  border: solid 1px #43936c;
  border-radius: 5px;
  width: 100%;
  margin: 20px 0 20px;
  height: 40px;
  color: white;
  font-weight: bold;
}
</style>
