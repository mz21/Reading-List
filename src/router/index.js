import Vue from 'vue';
import Router from 'vue-router';
import Reading from 'containers/Reading';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reading',
      component: Reading,
    },
  ],
});
