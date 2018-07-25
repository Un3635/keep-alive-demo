<template>
  <div>{{data}}</div>
</template>
<script>
export default {
  data() {
    return {
      data: ''
    };
  },
  created() {
    this.data = `关于我们${this.$route.query.id}`;
  }
};
</script>
