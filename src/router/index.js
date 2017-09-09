import Vue from 'vue';
import Router from 'vue-router';
import ReadingPage from 'containers/ReadingPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ReadingPage',
      component: ReadingPage,
    },
  ],
});
