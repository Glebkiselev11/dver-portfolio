import Vue from 'vue';
import App from './App.vue';
import router from './router';

import AppSingleImageDisplay from '@/components/AppSingleImageDisplay.vue';
import AppImageGallery from '@/components/AppImageGallery';

Vue.component('AppSingleImageDisplay', AppSingleImageDisplay);
Vue.component('AppImageGallery', AppImageGallery);

Vue.config.productionTip = false;

new Vue({
	router,
  render: h => h(App),
}).$mount('#app');
