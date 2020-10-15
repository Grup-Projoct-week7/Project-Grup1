<template>
  <div>
    <QuestionBoard class="col-8"/>
  </div>
</template>

<script>
import QuestionBoard from '@/components/BoardQuestion.vue' 

export default {
  name: 'Game Room',
  components: {
    QuestionBoard
  }
}
</script>

<style scoped>

QuestionBoard {
  max-height: 200px;
}

</style>