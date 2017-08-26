<template lang="jade">
.header
  h1 My Reading
  .nav
    a(href="/") Reading
    a(href="/to-read") To Read
</template>

<script>
export default {
  name: 'app-header',
};
</script>

<style lang="sass">
@import '~globals/base'
</style>
