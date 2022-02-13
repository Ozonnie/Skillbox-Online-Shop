import Vue from 'vue';
import App from './App.vue';

import {messageOne, messageTwo} from "./variable";
import {myFunction} from "./messageFunc";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

myFunction(messageOne);
myFunction(messageTwo);
