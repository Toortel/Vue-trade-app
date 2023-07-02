<!-- eslint-disable vue/valid-v-for -->
<template>
  <div>
    <ul id="stocks">
      <app-portfolio-stock
        v-for="stock in stocks"
        :stock="stock"
      ></app-portfolio-stock>
    </ul>
  </div>
</template>

<script>
import AppPortfolioStock from "./AppPortfolioStock.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppPortfolioStock,
  },

  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapGetters({
      stocks: "stocksPortfolio",
    }),
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
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 40px 20px;
}

@media (max-width: 1100px) {
  #stocks {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 900px) {
  #stocks {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 500px) {
  #stocks {
    display: flex;
    flex-direction: column;
  }
}
</style>
