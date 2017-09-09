<template lang="jade">
.item_line
  .item_type
    .item_type_circle
  .item_reading
    h4.reading_title {{ metadata.title }}
    .reading_author
      {{ authorsString }}
  .item_genres
    p.genre(v-for="genre in metadata.genres") {{ '#' + genre }}
  rating(:rating="metadata.rating")
</template>

<script>
import Rating from 'components/Rating';

export default {
  components: { Rating },
  props: ['metadata'],
  computed: {
    authorsString() {
      return this.metadata.authors.join(' & ');
    }
  }
};
</script>

<style lang="sass">
@import '~globals/base'
.item_line
  width: 100%
  display: flex
  font-size: 0.875rem !important
  padding: 1rem 0
  position: relative
  z-index: 1
.item_type
  width: $timeline-width
  .item_type_circle
    width: 1rem
    height: 1rem
    border-radius: 0.5rem
    border: 2px solid rgb(221,189,238)
    background-color: white
    margin: 0 auto
    margin-top: 0.25rem
.item_reading
  width: 40%
  padding-right: 1rem
  .reading_title
    font-size: 0.875rem
    font-weight: 400
    color: rgb(23,23,23)
  .reading_author
    color: rgb(112,112,112)
    font-weight: 300
.item_genres
  width: 25%
  display: flex
  p.genre
    margin: 0 5px
    color: rgb(164,164,164)
    font-weight: 300
</style>
