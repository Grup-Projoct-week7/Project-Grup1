import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    ready: false,
    readyCount: 0,
    messages: [],
    play:false,
    qboard: {
      song_url : 'https://srv-file2.gofile.io/downloadStore/srv-store3/llcq4S/kopisodik.mp3',
      text: 'What song is this ?'
    },
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
    'SOCKET_PLAYER-READY'(state, data) {
     state.readyCount = data
    },
    'SOCKET_CHANGE-PLAY'(state) {
      console.log("playy");
      state.play = true
    },
    'CHANGE-STATUS'(state , data) {
      if(state.readyCount<0){
        state.readyCount = 0
      }
      if(data == true){
        state.readyCount ++
      }else{
        if(state.readyCount>=0){
          if(state.readyCount<0){
            state.readyCount = 0
          }else{
            state.readyCount --
          }
        }
      }
      state.ready = data
    },

    
  },
  actions: {
  },
  modules: {
  }
})
