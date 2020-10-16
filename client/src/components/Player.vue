<template>
  <!-- <div class="player border flex-row ml-5 5-4" >
    <div class="border col-12 " >
      <p> {{ username }}</p>
      <div v-for="(user, index) in users" :key="index" class="row flex">
        <h3>{{ user.userName }}</h3>
        <h3> Points: {{ user.score }}</h3>
        <img
          alt="Vue logo"
          :src="
            `https://avatars.dicebear.com/api/avataaars/${user.userName}.svg?w=70&h=70&top[]=hijab`"/>
      </div>
    </div> 
  </div> -->
  <div class="main-board-left">
    <!-- ----------CARD------------ -->
    <div class="avatar-card" v-for="(user,index) in users" :key="index">
      <div class="avatar-img">
        <img
          :src="`https://avatars.dicebear.com/api/avataaars/${user.userName}.svg?w=70&h=70&top[]=hijab`"
          alt=""
        />
        <img src="../assets/Line 1.svg" alt="" />
      </div>
      <div class="avatar-info">
        <span>{{ username }}</span
        >
        <span class="ml-3">Score : {{user.score}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      chatUser: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    messages() {
      return this.$store.state.messages;
    },
  },
  methods: {
    sendMessage() {
      let chat = {
        message: this.chatUser,
        username: this.username,
      };
      this.$socket.emit("sendMessage", chat);
      this.chatUser = "";
    },
  },
  created() {
    this.username = localStorage.getItem("user_name");
    this.users;
  },
};
</script>

<style >
.player {
  padding: 15px;
  min-width: 220px;
  max-width: 250px;
}
</style>