<template>
  <!-- <div class="home">
    <div class="container mt-5">
      <h1>Whats your name ?</h1>
      <img
        alt="Vue logo"
        src="https://avatars.dicebear.com/api/avataaars/sdsdaa.svg?w=100&h=100&top[]=hat"
      />
      <form @submit.prevent="loginName">
        <input type="text" class="input-form" v-model="userName" id="" />
        <input
          type="submit"
          class="btn btn-outline-primary"
          name=""
          id=""
          value="Submit name"
        />
      </form>
    </div>
  </div> -->
  <!-- -------------ini file dari html file--------- -->

  <!-- <div class="board">
    <div class="int-user">
      <div class="title-header">
                <img src="./css/title.png" alt="">
            </div>
      <div class="content">
        <div class="content-item">
          <div class="content-lt-avatar">
            <img src="../assets/0.svg" alt="logo" height="200px" />
          </div>
          <form action="" @click.prevent="loginName">
          <div class="content-lt-input">
            <label for=""></label>
            <input type="text" class="text" placeholder="YOUR NICKNAME" v-model="userName" />
          </div>
        <div class="icon-btn">
          <div class="content-lt-input-btn">
            <img src="../assets/Group 6.svg" alt="" style="width: 15em" />
          </div>
          <div>
            <img src="../assets/Group 11.svg" alt="" width="350px" />
          </div>
        </div>

          </form>
        </div>
      </div>
      <div></div>
    </div>
  </div> -->
  <div class="board">
        <div class="int-user">
            <!-- <div class="title-header">
                <img src="./css/title.png" alt="">
            </div> -->
            <div class="content">
                <div class="content-item">
                    <div class="content-lt-avatar">
                        <img src="../assets/0.svg" alt="logo" height="200px">
                    </div>
                    <div class="content-lt-input">
                        <label for=""></label>
                        <input type="text" class="text" placeholder="YOUR NICKNAME">
                    </div>
                </div>
                <div class="icon-btn">
                    <div class="content-lt-input-btn">
                        <img src="../assets/Group 6.svg" alt="" style="width: 15em;">
                    </div>
                    <div>
                        <img src="../assets//Group 11.svg" alt="" width="350px">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
// import QuestionBoard from "@/components/BoardQuestion.vue";

export default {
  name: "Home",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    loginName() {
      let payload = {
        userName: this.userName,
        status: false,
        score: 0,
      };
      this.$socket.emit("userLogin", payload);
      localStorage.setItem("user_name", this.userName);
      this.$router.push({ path: "/room" });
    },
  },
};
</script>
