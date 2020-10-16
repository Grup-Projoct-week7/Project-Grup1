<template>
    <div class="pop-up" >
        <!-- <div >  -->
            <img width="300px" src="../assets/401a03_8d91cdf152684712a578b6ad08bc0906_mv2.gif" alt=""><br>
            <div class="card text-center ml-5 justify-content-center">
                <!-- <center> -->
                        <hr>
                    <div v-for="(user, index) in this.$store.state.users" :key="index" class="data flex row text-center justify-content-center">
                        <h2 >USER: {{user.userName}}</h2>
                        <h2 class="ml-5">POINT: {{user.score}}</h2>
                    </div>
                        <hr>

                <!-- </center> -->

            </div>
            <!-- <img src="./css/Group 10.svg" alt=""> -->
        <!-- </div> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

.pop-up{
    position: fixed;
    left:0;
    top:0;
    /* margin:0 auto; */
    padding:0;
    z-index: 999; 
    height: 100vh;
    width: 100%;
    background-color: #75879a7a;
} 

.card {
    margin-left:30%;
    margin: 0 auto;
    text-align: center;
    max-width: 800px;
} 
</style>