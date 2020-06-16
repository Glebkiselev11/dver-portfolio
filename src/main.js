import Vue from 'vue';
import App from './App.vue';
import router from './router';

import SingleImage from '@/components/App/SingleImage';
import ImageGallery from '@/components/App/ImageGallery';

Vue.component('SingleImage', SingleImage);
Vue.component('ImageGallery', ImageGallery);

Vue.config.productionTip = false;

new Vue({
	router,
  render: h => h(App),
}).$mount('#app');
