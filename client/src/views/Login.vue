<template>
  <div class="home"> 
    <QuestionBoard/>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionBoard from '@/components/BoardQuestion.vue' 

export default {
  name: 'Home',
  components: {
    QuestionBoard
  }
}
</script>
