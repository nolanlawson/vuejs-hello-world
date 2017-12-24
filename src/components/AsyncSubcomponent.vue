<template>
  <h1 :class="$style.dark + ' ' + $style.lightbg">hello this is an async subcomponent: {{message}}</h1>
</template>
<script>
export default {
  name: 'AsyncSubcomponent',
  props: {
    message: String
  }
}
</script>
<style module>
.dark {
  color: purple;
}
.lightbg {
  background-color: peachpuff;
  border-radius: 2px;
}
</style>
