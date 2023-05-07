<template>
  <div class="d-flex justify-content-between mt-2 item-box">
    <div class="d-flex justify-content-start">
      <img :src="cartItem.menu.image" alt="">
      <div class="d-flex flex-column">
        <span>{{ cartItem.menu.title }}</span>
        <span>{{ cartItem.size.name }}</span>
      </div>
    </div>
    <div class="right-box">
      <div class="d-flex flex-column">
        <span>가격 : {{ totalPrice }}</span>
        <span>{{ cartItem.option0.type }} {{ cartItem.option0.count }}회 | {{ cartItem.option1.type }} {{ cartItem.option1.count }}회 | {{ cartItem.option2.type }} {{ cartItem.option2.count }}회</span>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    cartItem: Object,
  },
  computed: {
    totalPrice () {
      let totalOptionPrice = 0

      for(let i=0;i<3;i++){
        totalOptionPrice += this.cartItem[`option${i}`].price * this.cartItem[`option${i}`].count
      }

      return this.cartItem.menu.price + this.cartItem.size.price + totalOptionPrice
    },
  },
}
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.item-box {
  width: 100%;
}

.right-box{
  margin-left: auto;
}

</style>