<template>
  <div>
    <div v-for="(msg, i) in messages" :key="i">
      <h1>{{ msg.username }}</h1>
      <p>{{ msg.message }}</p>
      <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`">
    </div>
    <div>
      <form @submit.prevent="sendMessage">
        <input type="text" v-model="chatUser" />
        <input type="submit" />
      </form>
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
  }
}
</script>

<style></style>
