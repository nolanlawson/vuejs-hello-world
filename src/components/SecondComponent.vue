<template>
  <div>
    <h1 :class="$style.royal + ' ' + $style.somebg">hello this is a second subcomponent</h1>
    <async-component message="yay im async"></async-component>
  </div>
</template>
<script>
  const AsyncComponent = () => new Promise(resolve => setTimeout(resolve, 2000))
    .then(() => import(/* webpackChunkName: "AsyncComponent" */ './AsyncSubcomponent'))

  export default {
    name: 'SecondComponent',
    components: {
      'async-component': AsyncComponent
    }
  }
</script>
<style module>
  .royal {
    color: royalblue;
  }
  .somebg {
    background-color: mintcream;
    border-radius: 17px;
  }
</style>
