import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backendURL: "https://api.punkapi.com/v2/beers?page=1&limit=25"
  },

  mutations: {},
  actions: {},
  modules: {},

  getters: {
    getServerUrl: state => {
      return state.backendURL
    }
  }
})
