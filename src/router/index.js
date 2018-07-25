import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import about from '@/components/about';

import child from '@/components/child/child';
import listOne from '@/components/child/listOne';
import listTwo from '@/components/child/listTwo';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // component: {template: '<router-view />'},
      component: {template: '<keep-alive include="about-component"><router-view /></keep-alive>'},
      children: [
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/child',
          name: 'child',
          component: child
        },
        {
          path: '/one',
          name: 'listOne',
          component: listOne
        },
        {
          path: '/two',
          name: 'listTwo',
          component: listTwo
        }
      ]
    }
  ]
});
