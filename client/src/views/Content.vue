<template>
  <div class="home">
    <div class="container my-5">
      <h1> Welcome {{username}}</h1>
    </div>
    <div class="container">
      <div class="container mx-0 px-0" style="width: 25%">
        <h3 id="onlineLabel">List of online players:</h3>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
            </tr>
          </thead>
          <tbody>
            <List v-for="(user, i) in users" v-bind:key="i" v-bind:user="user" v-bind:index="i"></List>
          </tbody>
        </table>
      </div>
      <div class="container border border-dark">
        <div class="container">
          <AnswerBox v-for="(answer, index) in answers" v-bind:key=index :answer="answer"></AnswerBox>
          <form class="my-3" v-on:submit.prevent="submitAnswer">
            <div class="form-group d-flex flex-row">
              <input type="text" class="form-control" v-model="answer">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '../components/ListOfPlayers.vue'
import AnswerBox from '../components/AnswerBox.vue'

export default {
  name: 'Home',
  data () {
    return {
      username: '',
      users: [],
      answer: '',
      answers: []
    }
  },
  components: {
    AnswerBox,
    List
  },
  methods: {
    submitAnswer () {
      let payload = {
        username: this.username,
        answer: this.answer
      }
      this.$socket.emit('sendAnswer', payload)
      this.answer = ''
    }
  },
  sockets: {
    userConnected (data) {
      console.log(data, 'emit dari server ditangkap sockets di Home.vue')
      this.users = data
    },
    sentAnswer (data) {
      this.answers = data
    }
  },
  created () {
    this.username = localStorage.username
  }
}
</script>

<style>
#onlineLabel{
  text-align: center;
}
</style>
