<!-- Plan: import two components from other components/ (.vues)
     Then have dynamic rots

     // Complete this tutorial:
     http://router.vuejs.org/en/essentials/dynamic-matching.html
 -->

<template>
  <div id="app">
    <div>
      <h4>Router links: import two components</h4>
      <!-- Router links get injected from main.js -->
      <p>Static Routes</p>
      <router-link to="/one">Go to One</router-link>
      <router-link to="/two">Go to Two</router-link>
      <br>
      <p>Dynamic Routes with Matching</p>
      <ol>
        <router-link
          v-for="num in nums"
          :to="{path: `/num/${num}`}"
        ><li>Go to num/{{num}}</li></router-link>
      </ol>

      <p>Make sure to have a Router View tag</p>
      <router-view></router-view>
    </div>
    <hr>
    <img src="./assets/logo.png">
    <h1></h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nums: [1, 2, 3, 4, 5]
    }
  }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
