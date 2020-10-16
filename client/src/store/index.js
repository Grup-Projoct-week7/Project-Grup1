import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

const checkAnswer = (user_chat, song_title) => {
  return user_chat === song_title
}

export default new Vuex.Store({
  state: {
    users: [],
    timeCountdown:20,
    ready: false,
    readyCount: 0,
    messages: [],
    songCount:0,
    play:false,
    qboard: {
      song_url : 'https://srv-file21.gofile.io/downloadStore/srv-store4/iDkhWc/Kuchkuchhotahai.mp3',
      title: 'Kuchkuchhotahai',
      text: 'Guess what song is this?'
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
     let checked
     let msg = data[data.length-1]
    //  state.messages.forEach(e => {
    //    checked = checkAnswer(e.message, state.qboard.title)

    //  })
    
    checked = checkAnswer(msg.message, state.qboard.title)
     if(checked){
      console.log('Benar')
      // console.log(state.messages);
      let index = state.users.findIndex(item => item.userName === msg.username);
      console.log(index,"<<<<<<<<<");
      state.users[index].score += 10
      // state.users.forEach(e =>{
      //   if(e.userName == localStorage.user_name){
      //     e.score = e.score + 10
      //     console.log(e)
      //   } 
        
      // })
      // console.log(state.users)

     }
     else{
      console.log('Salah')
      // console.log(state.users)
     }
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
      if(state.songCount >= state.songs.length ){
        console.log('Game selesai')
        state.play = 'finished' 
        // berhentikan SOCKET_NEXT-SONG dan panggil halaman skor
      }else{
        console.log("Urutan lagu", state.songCount);
        console.log("Jumlah lagu", state.songs.length);
        console.log('change song to ', state.songs[state.songCount]);
        // state.qboard = state.songs[state.songCount]
        state.qboard.song_url = state.songs[state.songCount].song_url
        state.qboard.title = state.songs[state.songCount].title
        console.log('playing : ', state.qboard)
        // state.play = true
        console.log("Urutan lagu sekarang", state.songCount, " == ", state.songs.length);
        state.songCount ++
      }
      
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
    changeSong (state) {
      if(state.songcount > state.songs.length){
        console.log('Game selesai')
        // berhentikan SOCKET_NEXT-SONG dan panggil halaman skor
      }
      else{
        // state.songCount ++
        console.log("Urutan lagu sekarang", state.songCount);
      }
    }
    

    
  },
  actions: {
  },
  modules: {
  }
})
