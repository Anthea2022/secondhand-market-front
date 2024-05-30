<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
  .app{
    padding:20px 0;
    margin: 0;
    background: url("./assets/background_image.jpg") no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
    color: black;
    overflow-y: auto;
  }
</style>
