<template>
  <div>
    <div
      id="overlay"
      :class="{ 'is-visible': overlayVisible }"
      @click="toggleOverlay"
    >
      <div id="modal" @click.stop>
        <p>Save</p>
        <p>Load</p>
        <p id="go-back" @click="toggleOverlay">return</p>
      </div>
    </div>
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
        <router-link
          to="/"
          tag="li"
          class="reactive-li"
          activeClass="active"
          exact
          >VueTrader</router-link
        >
        <router-link
          to="/portfolio"
          tag="li"
          class="reactive-li"
          activeClass="active"
          exact
          >Portfolio</router-link
        >
        <router-link
          to="/stocks"
          tag="li"
          class="reactive-li"
          activeClass="active"
          exact
          >Stocks</router-link
        >
      </ul>
      <ul id="right-nav">
        <li class="reactive-li" @click="endDay">End Day</li>
        <li class="reactive-li" id="dropdown" @click="toggleOverlay">
          Save & Load
        </li>
        <li tag="li">
          <strong
            >Funds: ${{ this.$store.getters.funds | toCurrencyFormat }}</strong
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      overlayVisible: false,
    };
  },
  methods: {
    ...mapActions(["randomizeStocks"]),
    endDay() {
      this.randomizeStocks();
    },
    toggleOverlay() {
      console.log(this.overlayVisible);
      this.overlayVisible = !this.overlayVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../utility/variables.scss";
#overlay {
  display: none;
  font-family: $font;
  font-weight: 700;
  font-size: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(142, 142, 142, 0.219);
  z-index: 50;

  #modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.445);
    padding: 75px 150px;
    border-radius: $border-radius-medium;
    z-index: 51;

    p {
      cursor: pointer;
      margin-top: 0;
    }

    p:hover {
      text-decoration: underline;
      color: white;
    }

    #go-back {
      font-size: 2rem;
    }
  }
}
#overlay.is-visible {
  display: block;
}

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
    }
    li.reactive-li {
      cursor: pointer;
    }

    li.reactive-li:hover {
      color: white;
    }

    li.active {
      color: white;
    }
  }
}

@media (max-width: 1050px) {
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
