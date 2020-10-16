<template>
  <!-- <div class=" border">
      <div class="p-5">
        <div v-for="(msg, i) in messages" :key="i" >
            <div v-if="msg.username === localstorage" class="row flex-row text-right">
                <p>{{ msg.message }}</p>
                <p>{{ msg.username }}</p>
                <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`" class="col3">
            </div>
            <div v-if="msg.username !== localstorage" class="row flex-row">
                <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`" class="col3">
                <p>{{ msg.username }}</p>
                <div class="ml-3">
                    <p>{{ msg.message }}</p>
                </div>
            </div>
        </div>
      </div>
    <div>
      <form @submit.prevent="sendMessage"  class="row d-flex justify-content-start">
          <div class="col-9">
                <input type="text" v-model="chatUser" />
          </div>
          <div class="col-3">
            <input type="submit" />
          </div>
      </form>
    </div>
  </div> -->
  <div>
    <div class="chat-title">
      <img src="../assets/Group 7.svg" alt="" height="50px" />
    </div>
    <div class="chat-body">
      <div class="p-5">
        <div v-for="(msg, i) in messages" :key="i">
          <div
            v-if="msg.username === localstorage"
            class="row flex-row text-right"
          >
            <div class="answer-text">
              <h3>{{ msg.message }}</h3>
            </div>
            <!-- <p>{{ msg.message }}</p> -->
            <p>{{ msg.username }}</p>
            <img
              alt="Vue logo"
              :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`"
              class="col3"
            />
          </div>
          <div v-if="msg.username !== localstorage" class="row flex-row">
            <img
              alt="Vue logo"
              :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=50&h=50&top[]=hat`"
              class="col3"
            />
            <p>{{ msg.username }}</p>
            <div class="ml-3">
              <p>{{ msg.message }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="answer-text">
        <h3>ini lagu apa ya??</h3>
      </div>
    </div>
    <form @submit.prevent="sendMessage">
      <div class="chat-input">
        <input type="text2" v-model="chatUser" placeholder="Your answer" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
    >
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
    messages() {
      return this.$store.state.messages;
    },
    localstorage() {
      return localStorage.user_name;
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
  },
};
</script>

<style>
</style>
