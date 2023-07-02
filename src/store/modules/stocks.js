/* eslint-disable no-unused-vars */
import stocks from "../../data/stocks";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS: (state, stocks) => {
    state.stocks = stocks;
  },
  //   RND_STOCKS: (state) => {},
};

const actions = {
  buyStock: (contextObj, order) => {
    contextObj.commit("BUY_STOCK", order);
  },
  initStocks: (contextObj) => {
    contextObj.commit("SET_STOCKS", stocks);
  },
  randomizeStocks: (contextObj) => {
    contextObj.commit("RND_STOCKS");
  },
};

const getters = {
  stocks: (state) => {
    return state.stocks;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
