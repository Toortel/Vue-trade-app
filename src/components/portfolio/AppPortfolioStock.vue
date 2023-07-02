<template>
  <div :id="stock.id">
    <p class="stock-name">{{ stock.name }}</p>
    <p class="stock-price">Price: ${{ stock.price.toFixed(2) }}</p>
    <p class="stock-quantity">
      Number of stocks: <strong>{{ stock.quantity }}</strong>
    </p>
    <p class="stock-total">
      Total value: ${{ (stock.price * stock.quantity).toFixed(2) }}
    </p>
    <input type="number" placeholder="Quantity" v-model="quantity" />
    <button @click="sell">Sell</button>
    <p class="error-message">Invalid amount of stocks!</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  mounted() {},

  methods: {
    ...mapActions(["sellStock"]),
    sell(event) {
      let errorMessageTransmitter = event.target;
      if (this.quantity < 1 || this.quantity > this.stock.quantity) {
        errorMessageTransmitter.previousSibling.style.backgroundColor =
          "salmon";
        errorMessageTransmitter.nextSibling.classList.add(
          "error-message-active"
        );
        return;
      } else {
        errorMessageTransmitter.previousSibling.style.backgroundColor = "white";
        errorMessageTransmitter.nextSibling.classList.remove(
          "error-message-active"
        );
      }

      const order = {
        stockID: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity,
      };
      this.sellStock(order);
      this.quantity = 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../utility/variables.scss";

div {
  height: 150px;
  list-style: none;
  text-align: left;
  background-color: $secondary-orange;
  padding: 10px;
  border-radius: $border-radius-medium;

  .stock-name {
    margin: 0;
    margin-right: 10px;
    margin-bottom: 5px;
  }
  .stock-price {
    margin: 0;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .stock-quantity {
    margin: 0;
    margin-bottom: 5px;
  }

  .stock-total {
    margin: 0;
  }

  input {
    margin-top: 20px;
    margin-right: 10px;
    width: 50%;
    outline: none;
    border: none;
    border-radius: $border-radius-small;
  }

  button {
    outline: none;
    padding: 2px 5px;
    border: none;
    border-radius: $border-radius-small;
    background-color: white;
    color: black;
  }

  .error-message {
    display: none;
    margin-bottom: 0;
    font-size: 0.75rem;
    font-weight: 600;
    color: $error-color-light;
  }

  .error-message-active {
    display: block;
  }
}
</style>
