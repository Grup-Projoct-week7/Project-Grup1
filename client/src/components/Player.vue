<template>
  <div class="player border flex-row ml-5 5-4" >
    <!-- <div class="border col-12 " > -->
      <h2> {{ username }}</h2>
      <div v-for="(user, index) in users" :key="index" class="row flex">
        <h3>{{ user.userName }}</h3>
        <img
          alt="Vue logo"
          :src="
            `https://avatars.dicebear.com/api/avataaars/${user.userName}.svg?w=70&h=70&top[]=hijab`"/>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  created() {
    this.username = localStorage.getItem("user_name");
    this.users
  }
}
</script>

<style > 
.player {
  padding:15px;
  min-width: 220px;
  max-width: 250px;
}

</style>