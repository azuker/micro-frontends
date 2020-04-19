<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br/>
    <app-greeter :username="username" @acked="ack" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: 'Jane',
    };
  },
  methods: {
    ack: function() {
      this.username = '';
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
