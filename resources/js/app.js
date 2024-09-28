import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import SampleComponent from './components/SampleComponent.vue';
import AppComponent from './views/App.vue';
import './index.css';
import store from '/resources/js/store/index.js';
import router from '/resources/js/router/index.js';


createApp({
    components: {
        AppComponent,
    }
}).use(store).use(router).mount('#app');
