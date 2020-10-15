import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    messages: []
  },
  mutations: {
    'SOCKET_USER-SUCCESS-LOGIN'(state, data) {
      state.users = data
    },
    'SOCKET_CHAT-USER'(state, data) {
     state.messages = data
    }
  },
  actions: {
  },
  modules: {
  }
})
