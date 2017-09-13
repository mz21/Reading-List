<template lang="jade">
.wrapper
  app-header
  .reading_page
    timeline(:sections="sections")
    .filter_section
</template>

<script>
import AppHeader from 'components/AppHeader';
import Timeline from 'containers/Timeline';
import Item from 'components/Item';

export default {
  components: { AppHeader, Item, Timeline },
  computed: {
    sections() {
      return this.$store.state.sections
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('loadData')
    }
  }
};
</script>

<style lang="sass">
@import '~globals/base'
.wrapper
  height: 100%
.reading_page
  padding: 0 $page-padding/2
  height: calc(100% - #{$header-height})
</style>
