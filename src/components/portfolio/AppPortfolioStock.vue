<template>
  <div :id="stock.id">
    <span class="stock-name">{{ stock.name }}</span
    ><br />
    <span class="stock-price">${{ stock.price.toFixed(2) }}</span>
    <span class="stock-quantity">{{ stock.quantity }}</span>
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  props: ["stock"],
  mounted() {},

  methods: {
    ...mapActions(["sellStock"]),
    sellStock() {
      const order = {
        stockID: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.stock.quantity,
      };
      this.sellStock(order);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../utility/variables.scss";

div {
  height: 80px;
  list-style: none;
  text-align: left;
  background-color: $secondary-orange;
  padding: 10px;
  border-radius: $border-radius-medium;

  .stock-name {
    margin-right: 10px;
  }
  .stock-price {
    font-weight: 400;
  }
  .stock-quantity {
  }
}
</style>
