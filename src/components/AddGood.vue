<template>
  <div v-if="isLoading" id="preloader_malc">
    <div class="preloader_malc-ins">Подождите, идет загрузка сайта ...</div>
  </div>
  <h1 class="title-name">Добавление товара</h1>
  <div class="add-good">
    <div class="good-name-title">
      Наименование товара
      <div class="zv"></div>
    </div>
    <input class="good-name-input" v-model="newGood.goodName" placeholder="Введите наименование товара" />
    <div class="good-description-title">Описание товара</div>
    <textarea
      class="good-description-input"
      v-model="newGood.goodDescription"
      placeholder="Введите описание товара"
    />
    <div class="good-image-title">
      Ссылка на изображение товара
      <div class="zv"></div>
    </div>
    <input class="good-image-input" v-model="newGood.goodImageUrl" placeholder="Введите ссылку" />
    <div class="good-price-title">
      Цена товара
      <div class="zv"></div>
    </div>
    <input class="good-price-input" v-model="newGood.goodPrice" placeholder="Введите цену" />
    <button @click="addGood" :disabled="!buttonDisabled">Добавить товар</button>
  </div>
</template>

<script>

export default {
  props: {
    isGoodAdded: {
      type: Boolean,
      required: true
    }
  },
  emit: ['update:isGoodAdded'],
  data () {
    return {
      newGood: {
        goodName: '',
        goodDescription: '',
        goodImageUrl: '',
        goodPrice: ''
      },
      isLoading: false
    }
  },
  computed: {
    buttonDisabled () {
      return this.newGood.goodName.length > 0 && this.newGood.goodImageUrl.length > 0 && this.newGood.goodPrice.length > 0
    }
  },
  methods: {
    cleanForm () {
      this.newGood.goodName = ''
      this.newGood.goodDescription = ''
      this.newGood.goodImageUrl = ''
      this.newGood.goodPrice = ''
    },
    addGood () {
      console.log(this.newGood)
      this.newGood.goodPrice = this.newGood.goodPrice.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ')
      this.isLoading = true
      fetch('https://vue-tt-402b8-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.newGood)
      }).then((response) => {
        if (response.ok) {
          this.$emit('update:isGoodAdded', !this.isGoodAdded)
          this.cleanForm()
          this.isLoading = false
        }
      })
    }
  }
}
</script>

<style scoped>
.preloader_malc {
  position: fixed;
  width:100%;
  height:100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6);
  z-index: 99;
  filter: blur(2px);
}

.preloader_malc-ins {
  background: #fff;
  width: 260px;
  height: 40px;
  line-height: 40px;
  border-radius: 8px;
  font-family: arial;
  font-size: 15px;
  color: #111;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.add-good {
  position: absolute;
  width: 332px;
  height: 440px;
  left: 32px;
  top: 83px;

  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.title-name {
  position: absolute;
  left: 32px;
  top: 32px;

  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;

  color: #3f3f3f;
}

.good-name-title {
  position: absolute;
  width: 95px;
  height: 13px;
  left: 24px;
  top: 24px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
/* identical to box height */

  letter-spacing: -0.02em;

/* Temp / Darks / Lesser */

  color: #49485E;
}

.zv {
  float: right;
  width: 4px;
  height: 4px;

  background: #FF8484;
  border-radius: 4px;
}

.good-name-input {
  position: absolute;
  width: 284px;
  height: 36px;
  top: 41px;
  left: 24px;
  /* Darks & Whites / White */

font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;

color: #3F3F3F;
}

.good-description {
  position: absolute;
  width: 284px;
  height: 125px;
  left: 24px;
  top: 93px;
}

.good-description-title {
  position: absolute;
  width: 74px;
  height: 13px;
  left: 24px;
  top: 93px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* Temp / Darks / Lesser */

  color: #49485E;
}

.good-description-input {
  position: absolute;
  width: 284px;
  height: 108px;
  left: 24px;
  top: 110px;

  /* Darks & Whites / White */

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* Temp / Darks / Lesser */

  color: #49485E;
}

.good-image-title {
  position: absolute;
  width: 134px;
  height: 13px;
  left: 24px;
  top: 234px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* Temp / Darks / Lesser */

  color: #49485E;
}

.good-image-input {
  position: absolute;
  width: 284px;
  height: 36px;
  left: 24px;
  top: 251px;

  /* Darks & Whites / White */

  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
}

.good-price-title {
  position: absolute;
  width: 134px;
  height: 13px;
  left: 24px;
  top: 303px;

  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  /* identical to box height */

  letter-spacing: -0.02em;

  /* Temp / Darks / Lesser */

  color: #49485E;
}

.good-price-input {
  position: absolute;
  width: 284px;
  height: 36px;
  left: 24px;
  top: 320px;

  /* Darks & Whites / White */

  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
}

button {
  position: absolute;
  width: 284px;
  height: 36px;
  left: 24px;
  top: 380px;

  background: #EEEEEE;
  border-radius: 10px;
  border: none;
}

button:hover:enabled{
  background: #53ad46;
}

button:enabled:focus {
  background: #116104;
}

button:enabled {
  background: #7BAE73;
}
</style>
