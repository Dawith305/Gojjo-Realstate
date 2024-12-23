<template>
  <h1 class="app-header">Gojjo Inc - Realstate</h1>
  <PostList />
</template>

<script>
import PostList from './components/Post/PostList.vue'

export default {
  name: 'App',
  components: {
    PostList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #2c3e50;
  padding-top: 60px;
}

body {
  margin: 0;
}

.app-header {
  color: white;
  text-align: center;
}
</style>
