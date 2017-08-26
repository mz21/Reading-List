<template lang="jade">
div
  app-header
  .reading
    .timeline_section
      item
    .filter_section
</template>

<script>
import AppHeader from 'components/AppHeader';
import Item from 'components/Item';

export default {
  name: 'reading',
  components: { AppHeader, Item }
};
</script>

<style lang="sass">
@import '~globals/base'
</style>
