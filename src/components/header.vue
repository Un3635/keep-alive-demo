<template>
  <div>
    <ul>
      <li>
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <router-link to="/about">关于我们</router-link>
      </li>
    </ul>
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'headerDom'
};
</script>
