import Vue from 'vue';
import Router from 'vue-router';
import ShoppingCart from './App.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingCart',
      component: ShoppingCart,
    },
  ],
});
