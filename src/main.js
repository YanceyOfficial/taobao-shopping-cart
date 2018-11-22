import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events';
import App from './App.vue';
import './assets/font/iconfont.css';
import './assets/style/_global.scss';

Vue.config.productionTip = false;
Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 10,
  swipeTolerance: 30,
  longTapTimeInterval: 400,
});
new Vue({
  render: h => h(App),
}).$mount('#app');
