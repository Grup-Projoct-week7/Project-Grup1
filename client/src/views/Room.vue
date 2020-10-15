<template>
  <div>
    <QuestionBoard class="col-8"/>
    <a href="#" class="btn btn-outline-danger" @click="exit">Exit Game</a>
    asad
    <Player/>
    <ChatBox/>
  </div>

</template>

<script>
import QuestionBoard from '@/components/BoardQuestion.vue' 
import Player from '@/components/Player.vue' 
import ChatBox from '@/components/ChatBox.vue' 

export default {
  name: 'Game Room',
  components: {
    QuestionBoard,
    Player,
    ChatBox
  },
  methods: {
    exit () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

QuestionBoard {
  max-height: 200px;
}

</style>