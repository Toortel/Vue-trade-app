<template>
  <div>
    <ul id="stocks">
      <li v-for="element in companies" :key="element.id">
        <div class="company-box">
          <span class="company-name">{{ element.company }}</span>
          <span class="company-price">${{ element.price.toFixed(2) }}</span>
          <br />
          <input type="number" placeholder="Quantity" />
          <button>Buy</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "VuetraderAppStocks",

  data() {
    return {
      companies: [
        { id: 1, company: "ABC Corporation", price: 100 },
        { id: 2, company: "XYZ Inc.", price: 200 },
        { id: 3, company: "Foo Industries", price: 150 },
        { id: 4, company: "Bar Enterprises", price: 300 },
        { id: 5, company: "Acme Co.", price: 250 },
        { id: 6, company: "Widgets Ltd.", price: 175 },
        { id: 7, company: "MegaCorp", price: 400 },
        { id: 8, company: "Global Corp", price: 225 },
        { id: 9, company: "Tech Solutions", price: 350 },
        { id: 10, company: "Innovative Systems", price: 275 },
        { id: 11, company: "Alpha Corporation", price: 125 },
        { id: 12, company: "Beta Inc.", price: 275 },
        { id: 13, company: "Gamma Industries", price: 200 },
        { id: 14, company: "Delta Enterprises", price: 325 },
        { id: 15, company: "Omega Co.", price: 275 },
        { id: 16, company: "Epsilon Ltd.", price: 150 },
        { id: 17, company: "Solutions R Us", price: 425 },
        { id: 18, company: "SuperCorp", price: 250 },
        { id: 19, company: "Tech Innovators", price: 375 },
        { id: 20, company: "Global Solutions", price: 300 },
        { id: 21, company: "ABC Corporation", price: 125 },
        { id: 22, company: "XYZ Inc.", price: 275 },
        { id: 23, company: "Foo Industries", price: 200 },
        { id: 24, company: "Bar Enterprises", price: 325 },
        { id: 25, company: "Acme Co.", price: 275 },
        { id: 26, company: "Widgets Ltd.", price: 150 },
        { id: 27, company: "MegaCorp", price: 425 },
        { id: 28, company: "Global Corp", price: 250 },
        { id: 29, company: "Tech Solutions", price: 375 },
        { id: 30, company: "Innovative Systems", price: 300 },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../utility/variables.scss";
#stocks {
  font-family: $font;
  font-weight: 300;
  padding: 0;
  margin: 150px auto;
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 40px 20px;
  li {
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
      margin-top: 10px;
      margin-right: 10px;
      width: 50%;
    }
  }
}
</style>
