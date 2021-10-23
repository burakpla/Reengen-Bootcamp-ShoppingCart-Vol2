import Vue from 'vue'
import Vuex from 'vuex'

import Puma from './assets/0085555_puma-mirage-sport-remix-381051-01.jpg'
import Vans from './assets/0086251_vans-ua-sk8-hi-vn0a32qg9g51-001.jpg'
import Nike from './assets/0059458_nike-w-air-max-2090-cv8727-100.jpg'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [
        {
            id: 1,
            name: 'Nike AirMax ',
            sizes: [35, 36, 37, 38, 39, 40],
            price:50,
            image: Nike
            

        },
        {
            id: 2,
            name: 'Puma Mirage',
            sizes: [36, 37, 38, 39, 40, 41],
            price: 45,
            image: Puma
        },
        {
            id: 3,
            name: 'Vans Ua',
            sizes: [4, 5, 7, 8],
            price: 40,
            image: Vans,
            description: "harika"
        }
       
       
       
    ],
    cart: []
  },
  
  getters: {
      total: state => {
            if(state.cart.length > 0) {
                return state.cart.map(item => item.price).reduce((total, amount) => total + amount);
            } else {
                return 0;
            }
      }
  },
    mutations: {
        addToCart(state, payload) {
            return state.cart.push(payload);
        }
    },
  actions: {
  }
})