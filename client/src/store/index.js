import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    messages: [],
    play:false,
    songs: [
      {
        title: 'lose yourself',
        song_url: 'https://srv-file9.gofile.io/downloadStore/srv-store1/xW5Jl3/c-13039fed16a173733f227b0bec631034-12.mp3'
      },
      { 
        title: 'baby shark',
        song_url: 'https://srv-file16.gofile.io/downloadStore/srv-store5/y8VwaJ/babyshark.mp3'
      }, 
    ]
  },
  mutations: {
    'SOCKET_USER-SUCCESS-LOGIN'(state, data) {
      // state.users.push(data[data.length-1])
      state.users = data
    },
    'SOCKET_CHAT-USER'(state, data) {
     state.messages = data
    },
    'CHANGE-PLAY'(state) {
      state.play = true
    }
    
  },
  actions: {
  },
  modules: {
  }
})
