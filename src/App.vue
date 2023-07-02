<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  created() {
    this.$store.dispatch("initStocks");
  },
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  margin: 0 auto;
}
</style>
