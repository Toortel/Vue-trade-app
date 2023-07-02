/* eslint-disable no-unused-vars */
const state = {
  funds: 10000,
  stocks: [],
};

const mutations = {
  BUY_STOCK: (state, { stockID, stockQuantity, stockPrice }) => {
    if (
      stockQuantity * stockPrice > state.funds ||
      !Number.isInteger(stockQuantity)
    ) {
      return;
    } else {
      const existingStock = state.stocks.find(
        (element) => element.id == stockID
      );
      if (existingStock) {
        existingStock.quantity += stockQuantity;
      } else {
        state.stocks.push({
          id: stockID,
          quantity: stockQuantity,
        });
      }

      state.funds -= stockPrice * stockQuantity;
    }
  },

  SELL_STOCK: (state, { stockID, stockQuantity, stockPrice }) => {
    const existingStock = state.stocks.find((element) => element.id == stockID);
    if (
      existingStock.quantity > stockQuantity ||
      !Number.isInteger(stockQuantity)
    ) {
      existingStock.quantity -= stockQuantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(existingStock), 1);
    }

    state.funds += stockPrice * stockQuantity;
  },
};

const actions = {
  sellStock: ({ commit }, order) => {
    commit("SELL_STOCK", order);
  },
};

const getters = {
  stocksPortfolio: (state, getters) => {
    return state.stocks.map((stock) => {
      const record = getters.stocks.find((el) => el.id == stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.company,
        price: record.price,
      };
    });
  },
  funds: (state) => {
    return state.funds;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
