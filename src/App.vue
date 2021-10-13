<template>
  <img alt="Khired logo" src="./assets/khired-logo.png" style="width:20%">
  <SignUp></SignUp>
</template>

<script>
import SignUp from './components/SignUp/index.vue'

export default {
  name: 'App',
  components: {
    SignUp,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>