<template>
  <h1 :class="$style.bright + ' ' + $style.graybg">hello this is a subcomponent: {{message}} and {{words}}</h1>
</template>
<script>
export default {
  name: 'Subcomponent',
  data () {
    return {
      words: 'wordswords'
    }
  },
  props: {
    message: String
  }
}
</script>
<style module>
.bright {
  color: lightyellow;
}
.graybg {
  background-color: lightgray;
  border-radius: 10px;
}
</style>
