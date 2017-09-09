<template lang="jade">
#app
  router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
@import 'globals/base'
html,body
  background-color: $base-background-color
#app
  height: 100%
</style>
