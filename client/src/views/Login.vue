<template>
  <div class="home">
    <div class="container mt-5">
      <h1>Whats your name ?</h1>
      <img
        alt="Vue logo"
        src="https://avatars.dicebear.com/api/avataaars/sdsdaa.svg?w=100&h=100&top[]=hat"
      />
      <form @submit.prevent="loginName">
        <input type="text" class="input-form" v-model="userName" id="" />
        <input type="submit" class="btn btn-outline-primary" name="" id="" value="Submit name"/>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import QuestionBoard from "@/components/BoardQuestion.vue";

export default {
   name: 'Home',
  data () {
    return {
      userName:''
    }
  },
  methods: {
    loginName () {
      let payload = {
        userName: this.userName,
        status: false,
        score:0
      }
      this.$socket.emit('userLogin',payload)
      localStorage.setItem('user_name', this.userName)
      this.$router.push({path: '/room'})
    }
  }
};
</script>
