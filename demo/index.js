/**
 * 作者：yujinjin9@126.com
 * 时间：2018-03-27
 */
import Vue from "vue";
import vueApp from "./app";
import Loading from "../dist/vue-loading-spin.umd.min.js";
import "../dist/vue-loading-spin.css";
Vue.use(Loading);
let VueApp = Vue.extend(vueApp);
new VueApp({ name: "app" }).$mount("#app");
