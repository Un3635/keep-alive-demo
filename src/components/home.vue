<template>
  <!-- <keep-alive> -->
  <div>
    <footer-dom />
    <span>首页</span>
    <header-box count="首页123"></header-box>
  </div>
  <!-- </keep-alive> -->
</template>

<script>
import HeaderBox from './header.vue';
export default {
  created() {
    console.log('home --- created');
  },
  activated() {
    // keep-alive 才能触发这个钩子
    console.log('home---activated');
  },
  components: {
    HeaderBox
  }
};
</script>
