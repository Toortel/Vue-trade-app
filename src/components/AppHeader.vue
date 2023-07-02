<template>
  <div>
    <nav id="nav-bar-small">
      <div id="hamburger">
        <div id="hamburger-a"></div>
        <div id="hamburger-b"></div>
        <div id="hamburger-c"></div>
      </div>
      <span id="nav-bar-small-title">VueTrade</span>
    </nav>
    <nav id="nav-bar">
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
        <li tag="li">
          <strong
            >Funds: ${{
              this.$store.getters.funds.toLocaleString("en", {
                minimumFractionDigits: 2,
              })
            }}</strong
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../utility/variables.scss";
#nav-bar-small {
  display: none;
}
#nav-bar {
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

@media (max-width: 1000px) {
  #nav-bar {
    width: 100%;
    border-radius: 0;
    margin: 0;
  }
}

@media (max-width: 800px) {
  #nav-bar {
    display: none;
  }

  #nav-bar-small {
    font-family: $font;

    display: block;

    div {
      position: fixed;
      margin: 0;
      background-color: $main-orange;
      width: 100%;
      height: 100px;
      top: 0;
      left: 0;

      // #nav-bar-small-title {
      //   text-align: right;
      // }

      #hamburger-a {
        width: 40px;
        height: 0px;
        border: 3px solid black;
        margin-top: 60px;
        margin-left: 40px;
      }

      #hamburger-b {
        width: 40px;
        height: 0px;
        border: 3px solid black;
        margin-top: 45px;
        margin-left: 40px;
      }

      #hamburger-c {
        width: 40px;
        height: 0px;
        border: 3px solid black;
        margin-top: 30px;
        margin-left: 40px;
      }
    }
  }
}
</style>
