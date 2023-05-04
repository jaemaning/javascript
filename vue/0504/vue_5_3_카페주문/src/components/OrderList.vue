<template>
  <div class="bottom-box">
    <h1>주문 내역</h1>
    <p>총 {{ totalOrderCount }}건: {{ totalOrderPrice }}원</p>
    <OrderListItem v-for="(cartitem, idx) in cart" :key="idx" :cart-item="cartitem"/>
  </div>
</template>

<script>
import OrderListItem from './OrderListItem.vue';

export default {
  name: 'OrderList',
  components:{
    OrderListItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    totalOrderCount () {
      return this.$store.state.cart.length
    },
    totalOrderPrice: function () {
      let totalPrice = 0
      this.cart.forEach(element => {
        totalPrice += element.menu.price
        totalPrice += element.size.price
      });
      return totalPrice
    },
  },
}
</script>

<style scoped>
.bottom-box {
  background-color: #eee;
  height: 100%;
  padding: 20px;
  font-weight: bold;
  width: 100%;
}
</style>