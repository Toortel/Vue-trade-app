<template>
  <div id="app">
    <app-header></app-header>
    <app-stock-trader></app-stock-trader>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppStockTrader from "./components/AppStockTrader.vue";

export default {
  components: {
    AppHeader,
    AppStockTrader,
  },
};
</script>

<style lang="scss">
#app {
  width: 80%;
  margin: 0 auto;
}
</style>
