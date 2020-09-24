<template>
  <div id="app">
    <center>
      <Staff />
    </center>
  </div>
</template>

<script>
import Staff from 'Modules/Staff/Staff.vue'

export default {
  name: 'App',
  components: {
    Staff
  }
}
</script>

<style>
@import "Styles/variables.css";
@import "Styles/form-group.css";
@import "Styles/main.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
