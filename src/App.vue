<template>
  <add-good/>
  <div class="sort">
    <div class="sort-center">
      <div class="sort-center-item">По умолчанию</div>
    </div>
  </div>
  <goods-board/>
</template>

<script>
import addGood from './components/AddGood.vue'
import goodsBoard from './components/GoodsBoard.vue'
export default {
  name: 'App',
  components: {
    addGood,
    goodsBoard
  }
}
</script>

<style scoped>
#app {
  position: relative;
  width: 1440px;
  height: 900px;
  background: rgba(251, 255, 251, 0.8);
}

.sort {
  position: absolute;
  width: 121.49px;
  height: 36px;
  left: 1287px;
  top: 31px;

  /* Darks & Whites / White */

  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.sort-center {
  position: absolute;
  width: 89.49px;
  height: 15px;
  left: 16px;
  top: 11px;
}

.sort-center-item {
  text-align: center;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}
</style>
