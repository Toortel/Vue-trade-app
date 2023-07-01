<template>
  <div class="company-box" key="id">
    <span class="company-name">{{ stock.company }}</span>
    <span class="company-price">${{ stock.price.toFixed(2) }}</span>
    <br />
    <input type="number" placeholder="Quantity" v-model="quantity" />
    <button @click="buyStock">Buy</button>
    <p class="error-message">Invalid amount of stocks!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  mounted() {},

  methods: {
    buyStock(event) {
      let errorMessageTransmitter = event.target;
      if (this.quantity < 1) {
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
        stockQuantity: this.quantity,
        stockPrice: this.stock.price,
      };

      this.quantity = 0;

      console.log(order);
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

  .company-name {
    margin-right: 10px;
  }
  .company-price {
    font-weight: 400;
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
