import Vue from 'vue'
import Vuex from 'vuex'
import findtiket from './findtiket/'
import users from './users/'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    findtiket,
    users
  }
})
