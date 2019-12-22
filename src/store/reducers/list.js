const INITIAL_STATE = ['teste', 'teste2', 'teste3'];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return [...state.filter((item, index) => index !== action.payload)];
    default:
      return state;
  }
};
