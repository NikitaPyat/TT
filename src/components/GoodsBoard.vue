<template>
  <ul class="goods">
    <li class="goods-item" v-for="good in goods" :key="good">
      <div class="good-item-delete">
        <button class="good-item-delete-button" @click="deleteGood(good.id)">
          <img class="good-item-delete-button-inside" src="./assets/bin.svg"/>
        </button>
      </div>
      <div class="goods-item-good">
        <img class="goods-item-good-image" :src='good.imageUrl' />
        <div class="goods-item-good-title">{{ good.title}}</div>
        <div class="goods-item-good-description">
          {{ good.description }}
        </div>
        <div class="goods-item-good-price" >{{ good.price }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    isGoodAdded: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      goods: []
    }
  },
  watch: {
    isGoodAdded () {
      this.loadGoods()
    }
  },
  methods: {
    deleteGood (goodId) {
      fetch('https://vue-tt-402b8-default-rtdb.firebaseio.com/goods/' + goodId + '.json', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        if (response.ok) {
          this.loadGoods()
        }
      })
    },
    loadGoods () {
      fetch('https://vue-tt-402b8-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
          if (response.ok) {
            console.log('ok')
            return response.json()
          }
        })
        .then((data) => {
          const d = []
          for (const id in data) {
            console.log(data)
            d.push({
              id: id,
              title: data[id].goodName,
              imageUrl: data[id].goodImageUrl,
              description: data[id].goodDescription,
              price: data[id].goodPrice
            })
          }
          console.log(d)
          console.log(this.goods)
          this.goods = d
        })
      console.log(this.goods)
    }
  },
  mounted () {
    this.loadGoods()
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

.good-item-delete {
  position: absolute;
  width: 32px;
  height: 32px;
  margin-left: 308px;
}

.goods-item:hover .good-item-delete-button{
  display: block;
}

.good-item-delete-button {
  width: 32px;
  height: 32px;

  background: #FF8484;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 10px;
  display: none;
}

.good-item-delete-button:hover{
  background: #ff5959;
}

.good-item-delete-button:focus{
  background: #db1d1d;
}

.good-item-delete-button-inside {
  width: 16px;
  height: 16px;
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
