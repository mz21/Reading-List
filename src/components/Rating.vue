<template lang="jade">
.rating_block
  .rating
    img.star(:src="filledStar", v-for="n in parseInt(rating, 10)")
    img.star(:src="emptyStar", v-for="n in 5 - parseInt(rating, 10)")
  p {{ message }}
</template>

<script>
import filledStar from 'assets/filled-star.svg';
import emptyStar from 'assets/empty-star.svg';

export default {
  props: ['rating'],
  data() {
    return {
      filledStar,
      emptyStar
    };
  },
  computed: {
    message() {
      switch (this.rating) {
        case '1':
          return 'The Worst';
        case '2':
          return 'Ok';
        case '3':
          return 'Good';
        case '4':
          return 'Great!';
        case '5':
          return 'Must Read!';
        default:
          return 'Unknown Rating';
      }
    }
  }
};
</script>

<style lang="sass" scoped>
@import '~globals/base'
.rating_block
  text-align: center
  color: rgb(170,170,170)
  font-size: 0.75rem
  font-weight: 300
  font-family: 'Calibre'
.rating
  display: flex
  align-items: flex-start
  img.star
    width: 1rem
    height: 1rem
</style>
