<template lang="jade">
.header
  .header_box
    h1.header_title Michael's Reading
    .nav
      a(href="/") Reading
      a(href="/to-read") To Read
</template>

<script>
export default {
};
</script>

<style lang="sass">
@import '~globals/base'
.header
  background-color: white
  border-bottom: $base-border
  height: $header-height
  padding: 0 $page-padding
  display: flex
  justify-content: center
  align-items: center
.header_box
  text-align: center
  h1.header_title
    font-weight: 400
    color: rgb(117,117,117)
  a
    text-decoration: none
    font-size: 0.875rem
    margin: 0.75rem
    font-weight: 300
</style>
