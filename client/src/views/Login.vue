<template>
  <div class="container border bg-light my-3" style="width: 25%">
    <h1 class="my-3">Welcome Players!</h1>
    <form class="my-3" v-on:submit.prevent="submit">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Username" v-model="username">
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%;">Submit</button>
    </form>
  </div>  
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    submit () {
      let payload = {
        username: this.username
      }
      this.$socket.emit('user-connect', payload)
      localStorage.setItem('username', this.username)
      this.$router.push({name: 'Content'})
    }
  }
}
</script>

<style>

</style>
