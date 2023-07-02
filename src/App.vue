<template>
  <div id="app">
    <app-header></app-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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

.slide-enter-active {
  animation: slide-in 300ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 300ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-100px);
    scale: 0;
    opacity: 0;
  }
  to {
    transform: translateY(0);
    scale: 1;
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    scale: 1;
    opacity: 1;
  }
  to {
    transform: translateY(100px);
    scale: 0;
    opacity: 0;
  }
}
</style>
