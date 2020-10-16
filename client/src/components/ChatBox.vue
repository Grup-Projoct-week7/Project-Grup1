<template>
  <div class=" border">
      <div class="p-5">
        <div v-for="(msg, i) in messages" :key="i" >
            <div v-if="msg.username === localstorage" class="row flex-row text-right">
                <p>{{ msg.message }}</p>
                <p>{{ msg.username }}</p>
                <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=20&h=20&top[]=hijab`" class="col3">
            </div>
            <div v-if="msg.username !== localstorage" class="row flex-row">
                <img alt="Vue logo" :src="`https://avatars.dicebear.com/api/avataaars/${msg.username}.svg?w=20&h=20&top[]=hijab`" class="col3">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      chatUser: "",
    };
  },
  computed: { 
    messages() {
      return this.$store.state.messages;
    },
    localstorage () {
        return localStorage.user_name
    }
  },
  methods: {
    sendMessage() {
      let chat = {
        message: this.chatUser,
        username: this.localstorage
      };
      this.$socket.emit("sendMessage", chat);
      this.chatUser = "";
    }
  },
}
</script>

<style> 
</style>
