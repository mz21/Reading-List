<template lang="jade">
.timeline
  .timeline_section(v-for="section in sections")
    .timeline_date_block
      p.day {{ section.day }}
    .timeline_section_block
      .timeline_line_block
        .timeline_line
      .timeline_items_section
        item(:metadata="item", v-for="item in section.items")

</template>

<script>
import Item from 'components/Item';

export default {
  props: ['sections'],
  components: { Item }
};
</script>

<style lang="sass" scoped>
@import '~globals/base'
.timeline
  width: 70%
  min-height: 100%
  border-right: $base-border
.timeline_section_block
  position: relative
.timeline_date_block
  padding: 1rem 0
  width: $timeline-width
  .day, .date
    line-height: 1rem
    font-size: 0.875rem
    font-family: 'Calibre'
    color: rgb(170,170,170)
    text-align: center
.timeline_line_block
  position: absolute
  width: $timeline-width
  height: 100%
  .timeline_line
    width: 2px
    height: 100%
    background-color: rgb(215,215,215)
    margin: 0 auto
    z-index: -10
</style>
