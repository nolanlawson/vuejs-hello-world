<template>
  <div class="hello">
    <h1 :class="$style.title">{{ msg }}</h1>
    <subcomponent message="yolo"></subcomponent>
  </div>
</template>

<script>

import SubComponent from './Subcomponent'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello world'
    }
  },
  components: {
    subcomponent: SubComponent
  }
}
</script>

<style module>
.title {
  font-weight: normal;
  color: red;
}
</style>
