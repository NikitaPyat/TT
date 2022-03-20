import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
  state () {
    return {
      goods: [
        {
          id: 0,
          imageUrl: 'https://ae04.alicdn.com/kf/U1166dfe977494f4383613899a7756c2dD/Polaroid-Now-Black.jpg',
          title: 'Наименование товара',
          description: 'Довольно-таки интересное описание товара в несколько строк. \nДовольно-таки интересное описание товара в несколько строк',
          price: 10000
        }
      ]
    }
  },
  getters: {
    goods (state) {
      return state.goods
    }
  },
  mutations: {
    addGood (state, newGood) {
      state.goods.push({
        id: state.goods.length > 0 ? state.goods[state.goods.length - 1].id + 1 : 0,
        imageUrl: newGood.goodImageUrl,
        title: newGood.goodName,
        description: newGood.goodDescription,
        price: newGood.goodPrice
      })
    }
  }
})

createApp(App).use(store).mount('#app')
