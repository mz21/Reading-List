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
  data() {
    return {
      sections: [
        {
          day: 'TODAY',
          items: [
            {
              type: 'article',
              title: 'Brainstorming is Dumb',
              authors: ['Annie Sneed'],
              website: 'Medium',
              genres: ['career', 'networking'],
              rating: 3,
              date: 1503769386925,
              section: 1
            },
            {
              type: 'article',
              title: 'Good News for Young Strivers: Networking is Overrated',
              authors: ['Adam Grant'],
              website: 'The New York Times',
              genres: ['psychology', 'networking'],
              rating: 3,
              date: 1503769386924,
              section: 1
            }
          ]
        },
        {
          day: 'WED',
          date: 'AUG 24',
          items: [
            {
              type: 'book',
              title: 'The Power of Habit',
              authors: ['Charles Duhigg'],
              genres: ['productivity', 'psychology'],
              rating: 4,
              section: 2
            }
          ]
        }
      ]
    };
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
