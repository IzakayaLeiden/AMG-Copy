import { createApp } from 'vue'
import App from './App.vue'
// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css"
import "chart.js"
import router from './router'

//Vue.component("Navbar", require('./components/Navbar.vue').default;

createApp(App).use(router).mount('#app')
