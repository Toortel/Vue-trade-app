import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.filter("toCurrencyFormat", function (value) {
  return value.toLocaleString("en", {
    minimumFractionDigits: 2,
  });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
