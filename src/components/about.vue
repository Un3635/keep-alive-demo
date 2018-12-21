<template>
<!-- <keep-alive> -->
  <div>
    <footer-dom />
    <header-box count="123关于"></header-box>
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
import HeaderBox from './header.vue';
export default {
  name: 'about-component',
  data() {
    return {
      inputVal: '123'
    };
  },
  created() {
    console.log('about --- created');
  },
  methods: {
    getData() {
      let p1 = new Promise((resolve, reject) => {
        resolve('success1');
      });
      let p2 = new Promise((resolve, reject) => {
        resolve('success2');
      });
      Promise.all([p1, p2]).then((res) => {
        console.log(res);
      }).catch(() => {
        console.log('erro');
      });
    }
  },
  activated() {
    // keep-alive 才能触发这个钩子
    console.log('activated');
  },
  beforeRouteEnter(to, from, next) {
    // 浏览器 前进 后退使用 keep-alive
    next(vm => {
      // console.log(to.meta.savePosition);
      if (to.meta.savePosition === undefined) {
        vm.getData();
      } else if (to.meta.savePosition === null) {
        vm.getData();
      }
    });
  },
  components: {
    HeaderBox
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
