<template>
<!-- <keep-alive> -->
  <div>
    <ul>
      <li v-for="index in 15" :key="index">
          <router-link :to="{path:'/child', query: {id: index}}">关于我们{{index}}</router-link>
      </li>
    </ul>
    <input type="text" v-model="inputVal">
  </div>
  <!-- </keep-alive> -->
</template>
<script>
export default {
  name: 'about-component',
  data() {
    return {
      inputVal: '123'
    };
  },
  created() {
    console.log('about --- keepalive');
  },
  activated() {
    // keep-alive 才能触发这个钩子
    console.log(this.inputVal);
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
