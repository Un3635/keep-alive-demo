// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import footerDom from './components/common/footer';

const components = [footerDom];
const footer = {
  install() {
    components.forEach(component => {
      console.log(component);
      Vue.component(component.name, component);
    });
  }
};
Vue.use(footer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
