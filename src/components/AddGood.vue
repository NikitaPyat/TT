<template>
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
  data () {
    return {
      newGood: {
        goodName: '',
        goodDescription: '',
        goodImageUrl: '',
        goodPrice: ''
      }
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
      this.$store.commit('addGood', this.newGood)
      this.cleanForm()
    }
  }
}
</script>

<style scoped>
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

button:enabled {
  background: #7BAE73;
}
</style>
