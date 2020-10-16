<template>
  <div>
    <div class="container border border-secondary d-flex flex-row">
      <h6>{{answer.username}}</h6>
      <p>{{answer.answer}}</p>
    </div>
  </div>
</template>

<script>
export default {
 name: 'AnswerBox',
 props: ['answer']
}
</script>

<style>

</style>
