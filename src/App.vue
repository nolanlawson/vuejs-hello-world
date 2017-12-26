<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
      <router-link to="/">Go to home</router-link>
      <router-link to="/second">Go to Second</router-link>
      <router-link to="/third">Go to Third</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
