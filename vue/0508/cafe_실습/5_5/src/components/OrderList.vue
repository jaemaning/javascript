<template>
  <div class="bottom-box">
    <h2>주문 내역</h2>
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
      const carts = sessionStorage.getItem("cartSession")
      const cart = this.$store.state.cart
      const result = carts ? JSON.parse(carts) : cart
      return result
    },
    totalOrderCount () {
      return this.cart.length
    },
    totalOrderPrice () {
      let totalPrice = 0

      this.cart.forEach(element => {
        totalPrice += element.menu.price
        totalPrice += element.size.price
        for (let i=0;i<3;i++){
          totalPrice += element[`option${i}`].price * element[`option${i}`].count
        }
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