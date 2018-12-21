<template>
  <div>
   {{count}}
  </div>
</template>
<script>
export default {
  name: 'headerDom',
  props: {
    count: {
      default: '1',
      type: String
    }
  }
};
</script>
