<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
         <router-link to="/about">关于我们</router-link>
      </li>
    </ul>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <!-- <keep-alive exclude='about'> -->
      <router-view/>
    <!-- </keep-alive> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    console.log('app');
  }
};
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
ul, li, a{
  display: inline-block;
  list-style: none;
}
ul {
  background: #2c3e50;
}
li {
  width: 200px;
}
a{
  padding: 10px;
  color: white;
}
</style>
