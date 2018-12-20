import Vue from 'vue';
import Router from 'vue-router';
// import header from '@/components/header';
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
      component: {template: '<router-view />'},
      // name: 'header',
      // component: header,
      // component: {template: '<keep-alive include="about-component"><router-view /></keep-alive>'},
      children: [
        // {
        //   path: '',
        //   name: 'header',
        //   component: header
        // },
        {
          path: '',
          redirect: 'home'
        },
        {
          path: 'home',
          name: 'home',
          component: home
        },
        {
          path: 'about',
          name: 'about',
          component: about,
          meta: {
            keepAlive: true
          }
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
  ],
  scrollBehavior(to, from, savePosition) {
    // 这个行为只能在 HTML5 history 下才可以用
    // 保存在meta 备用
    to.meta.savePosition = savePosition;
    if (savePosition) {
      return { x: 0, y: 0 };
    }
    return {};
    // return {x: 0, y: 0};
    // if (to.hash) {
    //   return {
    //     selector: to.hash
    //   }
    // }
  }
});
