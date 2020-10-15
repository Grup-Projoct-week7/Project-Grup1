<template>
  <div class="container">
    <QuestionBoard class="col-8"/>
    {{readyCheck}} player ready
    <a href="#" class="btn btn-outline-danger"  @click="exit">Exit Game</a>
    <a href="#" class="btn btn-outline-info" v-if="this.$store.state.ready == false" @click="ready">Ready</a>
    <a href="#" class="btn btn-outline-danger" v-if="this.$store.state.ready == true"  @click="unready">Unready</a>
    
    <div class="row" >
      <div class="col player-container">
        <Player/>
      </div>
      <div class="col chat-container"> 
        <ChatBox/>
      </div>
    </div>
  </div>

</template>

<script>
import QuestionBoard from '@/components/BoardQuestion.vue' 
import Player from '@/components/Player.vue' 
import ChatBox from '@/components/ChatBox.vue' 

export default {
  name: 'GameRoom',
  components: {
    QuestionBoard,
    Player,
    ChatBox
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push('/')
    },
    ready () {
      console.log(this.users); 
      this.$store.commit('CHANGE-STATUS',true)  
        this.$socket.emit("readyCheck", 1); 
    },
    unready () {
      console.log(this.users); 
      this.$store.commit('CHANGE-STATUS',false)  
      this.$socket.emit("readyCheck", -1); 
    },
    changePlay() {
      this.$socket.emit("startGame"); 
    }

  },
  watch: {
    readyCheck(newValue) {
      console.log("check");
      if (newValue === this.users.length ) {
        console.log("START!");
        this.changePlay()
        // this.$socket.emit("startGame");
      }
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    messages() {
      return this.$store.state.messages;
    },
    readyCheck() {
      return this.$store.state.readyCount;
    },
    readyB () {
      if(this.$store.state.ready == true){
        return 'Unready'
      }else{
        return 'Ready'
      }

    }
  },
  created() {
    this.$store.commit('CHANGE-STATUS',false)  
  }
}
</script>

<style scoped>

QuestionBoard {
  max-height: 200px;
}

</style>