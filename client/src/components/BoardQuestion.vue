<template>
  <div class="container justify-content-center border p-5 flex">
      <div class="row">
          <div class="col-3" v-if="$store.state.play === true">
              <BaseTimer time="20"/>
          </div> 
          <div class="col title p-2">
            <audio v-if="$store.state.play === true" controls autoplay> 
                <source :src="qboard.song_url" type="audio/mpeg"> 
            </audio>
            <h1 v-if="$store.state.play === false">Waiting for other players</h1>
            <center v-if="$store.state.play === true">
              <h1>{{qboard.text}}</h1>
              <!-- <div class="card col-6 mt-5 p-3 ">
                  <h4> Hint <hr></h4> 
              </div> -->
            </center> 
          </div>
      </div> 
  </div>
</template>

<script>
import BaseTimer from "@/components/BaseTimer";
import Player from "@/components/Player.vue";

export default {
  name: "QuestionBoard",
  props: ['song'],
  components: {
    BaseTimer,
    Player
  },
  methods: { 
  },
  computed: {
    qboard () {
      return this.$store.state.qboard
    }
  }
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
