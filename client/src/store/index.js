import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    timeCountdown:20,
    ready: false,
    readyCount: 0,
    messages: [],
    songCount:1,
    play:false,
    qboard: {
      song_url : 'https://srv-file9.gofile.io/downloadStore/srv-store1/xW5Jl3/c-13039fed16a173733f227b0bec631034-12.mp3',
      title: 'lose yourself',
      text: 'Guess what song is this?'
    },
    songs: [
      { 
        title: 'Kuchkuchhotahai',
        song_url: 'https://srv-file21.gofile.io/downloadStore/srv-store4/iDkhWc/Kuchkuchhotahai.mp3'
      },
      {
        title: 'lose yourself',
        song_url: 'https://srv-file9.gofile.io/downloadStore/srv-store1/xW5Jl3/c-13039fed16a173733f227b0bec631034-12.mp3'
      },
      { 
        title: 'baby shark',
        song_url: 'https://srv-file16.gofile.io/downloadStore/srv-store5/y8VwaJ/babyshark.mp3'
      },
      { 
        title: 'Kopi dangdut',
        song_url: 'https://srv-file2.gofile.io/downloadStore/srv-store3/llcq4S/kopisodik.mp3'
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
    'SOCKET_NEXT-SONG'(state) { 
      state.play = 'load'
      console.log(state.songCount);
      // console.log(state.songs);
      console.log('change song to ', state.songs[state.songCount]);
      // state.qboard = state.songs[state.songCount]
      state.qboard.song_url = state.songs[state.songCount].song_url
      state.qboard.title = state.songs[state.songCount].title
      console.log('playing : ',state.qboard)
      // state.play = true
      state.songCount ++

    }, 
    'CHANGE-PLAY'(state){
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
