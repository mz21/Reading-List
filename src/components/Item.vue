<template lang="jade">
.item_line
  .item_reading
  .item_genres
  rating
</template>

<script>
import Rating from 'components/Rating';

export default {
  name: 'item',
  components: { Rating }
};
</script>

<style lang="sass">
@import '~globals/base'
</style>
