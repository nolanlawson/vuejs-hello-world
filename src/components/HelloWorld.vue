<template>
  <div class="hello">
    <h1 :class="$style.title">{{ msg }}</h1>
    <h2 :class="$style.title">Essential Links</h2>
    <subcomponent message="yolo"></subcomponent>
    <async-component message="yay im async"></async-component>
  </div>
</template>

<script>

import SubComponent from './Subcomponent'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    subcomponent: SubComponent,
    'async-component': () => new Promise((resolve, reject) => setTimeout(resolve, 5000))
      .then(() => import(/* webpackChunkName: "AsyncComponent" */ './AsyncSubcomponent'))
  }
}
</script>

<style module>
.title {
  font-weight: normal;
  color: red;
}
</style>
