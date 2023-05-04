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
      <div>가격 : {{ totalPrice }}</div>
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
      return this.cartItem.menu.price + this.cartItem.size.price
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