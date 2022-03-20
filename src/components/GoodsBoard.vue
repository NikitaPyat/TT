<template>
  <ul class="goods">
    <li class="goods-item" v-for="good in goods" :key="good">
      <div class="goods-item-good">
        <img class="goods-item-good-image" :src='good.imageUrl' />
        <div class="goods-item-good-title">{{ good.title}}</div>
        <div class="goods-item-good-description">
          {{ good.description }}
        </div>
        <div class="goods-item-good-price">{{ good.price }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    goods: function () {
      return this.$store.getters.goods
    }
  }
}
</script>

<style scoped>
.goods {
  list-style-type: none;
  position: absolute;
  width: 1028px;
  height: 870px;
  left: 340px;
  top: 75px;
  border-width: 40px;
}

.goods-item {
  float: left;
  width: 342.47px;
  height: 451.26px;
}

.goods-item-good {
  position: static;
  width: 332px;
  height: 423px;

  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.goods-item-good-image {
  width: 332px;
  height: 200px;
  border-radius: 4px 4px 0px 0px;
}

.goods-item-good-title {
  width: 201px;
  height: 25px;
  margin-left: 16px;
  margin-top: 16px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;

  color: #3F3F3F;
}

.goods-item-good-description {
  width: 300px;
  height: 80px;
  margin-left: 16px;
  margin-top: 16px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;

  color: #3F3F3F;
}

.goods-item-good-price {
  width: 117px;
  height: 30px;
  margin-left: 16px;
  margin-top: 32px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  color: #3F3F3F;
}
</style>
