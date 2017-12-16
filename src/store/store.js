import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // describe different sets of data
    state: {
        products: [
          {name: 'first', price: 10},
          {name: 'scnd', price: 20}
        ]
    }

});