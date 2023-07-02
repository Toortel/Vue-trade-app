<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <ul id="stocks">
      <app-portfolio-stock
        v-for="stock in stocksPortfolio"
        :stock="stock"
      ></app-portfolio-stock>
    </ul>
  </div>
</template>

<script>
import AppPortfolioStock from "./AppPortfolioStock.vue";
export default {
  components: {
    AppPortfolioStock,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  computed: {
    stocksPortfolio() {
      return this.$store.getters.stocksPortfolio;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../utility/variables.scss";
#stocks {
  font-family: $font;
  font-weight: 300;
  padding: 20px;
  margin: 150px auto;
  width: 80%;
  max-width: $max-size;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px 20px;
}

@media (max-width: 900px) {
  #stocks {
    grid-template-columns: auto auto;
  }
}
</style>
