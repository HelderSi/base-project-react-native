/*
Ducks pattern
https://github.com/erikras/ducks-modular-redux
*/

/*
 * Actions Types
 */

export const Types = {
  ADD_ITEM: 'list/ADD_ITEM',
  CHANGE_LIST: 'list/CHANGE_LIST',
  REMOVE_ITEM: 'list/REMOVE_ITEM',
  REQUEST_ITEM: 'list/REQUEST_ITEM',
  REQUEST_SUCCESS: 'list/REQUEST_SUCCESS',
};

/*
 * Actions Creators
 */

export const add = item => ({type: Types.ADD_ITEM, payload: item});

export const changeList = list => ({type: Types.CHANGE_LIST, payload: list});

export const remove = itemId => ({type: Types.REMOVE_ITEM, payload: itemId});

export const fetchItem = param => ({
  type: Types.REQUEST_ITEM,
  payload: {param},
});

export const requestSuccess = result => ({
  type: Types.REQUEST_SUCCESS,
  payload: result,
});

export const Creators = {
  add,
  changeList,
  remove,
  fetchItem,
  requestSuccess,
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  list: [{name: 'Teste'}],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {...state, list: [...state.list, action.payload]};
    case Types.CHANGE_LIST:
      return {...state, list: [...action.payload]};
    case Types.REMOVE_ITEM:
      return {
        ...state,
        list: [...state.list.filter((item, index) => index !== action.payload)],
      };
    default:
      return state;
  }
};
