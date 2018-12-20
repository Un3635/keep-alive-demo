<template>
<!-- <keep-alive> -->
  <div>
    首页
  </div>
  <!-- </keep-alive> -->
</template>
<script>
export default {
  created() {
    console.log('home --- created');
  },
  activated() {
    // keep-alive 才能触发这个钩子
    console.log('home---activated');
  }
};
</script>
