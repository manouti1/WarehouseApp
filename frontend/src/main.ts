import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/global.css";
import router from "./router/router";
const app = createApp(App);
app.use(router);

app.mount("#app");
