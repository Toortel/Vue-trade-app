<template>
  <div>
    <nav>
      <ul id="left-nav">
        <li>VueTrader</li>
        <li>Portfolio</li>
        <li>Stocks</li>
      </ul>
      <ul id="right-nav">
        <li>End Day</li>
        <li>Save & Load</li>
        <li><strong>Funds: </strong></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../utility/variables.scss";

nav {
  display: flex;
  justify-content: space-between;
  margin: 25px auto;
  background-color: $main-orange;
  font-family: $font;
  font-weight: 400;
  border-radius: 15px;
  position: sticky;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      margin: 10px 20px;
      cursor: pointer;
    }
  }
}
</style>
