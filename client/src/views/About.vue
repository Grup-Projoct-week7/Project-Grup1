<template>
  <div class="about">
    <p>welcome {{ username }}</p>
    <div v-for="(user, index) in users" :key="index">
      <h1>{{ user.userName }}</h1>
      <p>{{user.status}}, {{user.score}}</p>
      <img
        alt="Vue logo"
        :src="
          `https://avatars.dicebear.com/api/avataaars/${user.userName}.svg?w=100&h=100&top[]=hijab`"/>
    </div>
    <div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="chatUser" />
        <input type="submit" />
      </form>
    </div>
    <div v-for="(msg, i) in messages" :key="i">
      <h1>{{ msg.username }}</h1>
      <p>{{ msg.message }}</p>
      <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      chatUser: ""
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    messages() {
      return this.$store.state.messages;
    }
  },
  methods: {
    sendMessage() {
      let chat = {
        message: this.chatUser,
        username: this.username
      };
      this.$socket.emit("sendMessage", chat);
      this.chatUser = "";
    }
  },
  created() {
    this.username = localStorage.getItem("user_name");
    this.users
  }
}
</script>

<style></style>
