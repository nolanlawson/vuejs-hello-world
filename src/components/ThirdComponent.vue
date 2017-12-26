<template>
  <h1 :class="$style.thirdstyle + ' ' + $style.thirdbg">hello this is a third component</h1>
</template>
<script>
  export default {
    name: 'ThirdComponent'
  }
</script>
<style module>
  .thirdstyle {
    color: brown;
  }
  .somebg {
    background-color: darkgreen;
    border-radius: 1px;
  }
</style>
