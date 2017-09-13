<template lang="jade">
.item_line
  .item_type
    .item_type_circle(:style="{ borderColor: readingTypeColor }")
  .item_reading
    a.reading_title_url(:href="metadata.url" target="_blank")
      h4.reading_title {{ metadata.readingTitle }}
    .reading_author(v-if="authorsString")
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
      if (this.metadata.authors) {
        return this.metadata.authors.join(' & ')
      }
      return null
    },
    readingTypeColor() {
      switch (this.metadata.readingType) {
        case 'Article':
          return '#dcb0f4'
        case 'Book':
          return '#90DBD8'
        case 'Video':
          return '#f6a9ae'
        default:
          return '#dcb0f4'
      }
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
    border-width: 2px
    border-style: solid
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
  flex-wrap: wrap
  p.genre
    margin: 0 5px
    color: rgb(164,164,164)
    font-weight: 300
</style>
