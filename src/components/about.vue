<template>
<!-- <keep-alive> -->
  <div>
    <ul>
      <li v-for="index in 15" :key="index">
          <router-link :to="{path:'/child', query: {id: index}}">关于我们{{index}}</router-link>
      </li>
    </ul>
  </div>
  <!-- </keep-alive> -->
</template>
<script>
export default {
  name: 'about-component',
  created() {
    console.log('about --- keepalive');
  }
};
</script>
<style scoped>
ul li {
  display: block;
  background: #ffffff;
}
a{
  padding: 30px;
  color: #000;
}
</style>
