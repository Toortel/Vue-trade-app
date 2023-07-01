<template>
  <div>
    <nav>
      <ul id="left-nav">
        <router-link to="/" tag="li" activeClass="active" exact
          >VueTrader</router-link
        >
        <router-link to="/portfolio" tag="li" activeClass="active" exact
          >Portfolio</router-link
        >
        <router-link to="/stocks" tag="li" activeClass="active" exact
          >Stocks</router-link
        >
      </ul>
      <ul id="right-nav">
        <li>End Day</li>
        <li>Save & Load</li>
        <li tag="li"><strong>Funds: </strong></li>
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
  top: 0;
  left: 0;
  position: fixed;
  width: 80%;
  max-width: $max-size;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  margin: 25px auto;
  background-color: $main-orange;
  font-family: $font;
  font-weight: 400;
  border-radius: $border-radius-medium;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
      margin: 10px 20px;
      padding: 10px;
      cursor: pointer;
    }

    li:hover {
      color: white;
    }

    li.active {
      color: white;
    }
  }
}
</style>
