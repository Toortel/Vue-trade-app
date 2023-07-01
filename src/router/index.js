import Vue from "vue";
import VueRouter from "vue-router";
import AppStockTrader from "../components/AppStockTrader.vue";
import AppPortfolio from "../components/portfolio/AppPortfolio.vue";
import AppStocks from "../components/stocks/AppStocks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    components: {
      default: AppStockTrader,
    },
  },
  {
    path: "/portfolio",
    components: {
      default: AppPortfolio,
    },
  },
  { path: "/stocks", components: { default: AppStocks } },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
