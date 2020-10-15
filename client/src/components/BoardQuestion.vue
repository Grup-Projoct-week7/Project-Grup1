<template>
  <div class="container justify-content-center border p-5 flex">
      <div class="row">
          <div class="col-3" v-if="$store.state.playGames === true">
              <BaseTimer/>
          </div>
          <div class="col title p-2">
            <audio v-if="$store.state.playGames === true" controls autoplay> 
                <source src="https://srv-file9.gofile.io/downloadStore/srv-store1/xW5Jl3/c-13039fed16a173733f227b0bec631034-12.mp3" type="audio/mpeg"> 
            </audio>
              <center>
                <h1>Whats Song is this ?</h1> 
                <div class="card col-6 mt-5 p-3 ">
                    <h4> Hint <hr></h4> 
                </div>
                <button @click="changePlay">CLICK</button>
              </center>
          </div>
      </div> 
  </div>
</template>

<script>
import BaseTimer from "@/components/BaseTimer";

export default {
  name: "QuestionBoard",
  props: ['song'],
  components: {
    BaseTimer
  },
  methods: {
    changePlay() {
      this.$store.commit("CHANGE-PLAY")
    }
  },
};
</script>

<style scoped>
.container {
    border: solid black ;
    background-color: blanchedalmond;
    border-radius: 15px;
} 
.row {
    max-height: 200px;
}
</style>
