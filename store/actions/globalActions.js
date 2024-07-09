export const globalActions = {
  setWallet: (state, action) => {
    state.wallet = action.payload;
  },
  setSearchtokenModal: (state, action) => {
    state.searchtokenModal = action.payload;
  },
  setFundsModal: (state, action) => {
    state.fundsModal = action.payload;
  },
};
