import './bootstrap';
import { createApp } from 'vue/dist/vue.esm-bundler';
import SampleComponent from './components/SampleComponent.vue';

createApp({
    components: {
        SampleComponent,
    }
}).mount('#app');