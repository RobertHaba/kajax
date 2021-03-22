import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });
console.log('asdasd');
app.use(router).mount("#app");