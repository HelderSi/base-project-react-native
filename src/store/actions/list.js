export const add = item => ({type: 'ADD_ITEM', payload: item});
export const remove = itemId => ({type: 'REMOVE_ITEM', payload: itemId});
export const fetchItem = param => ({
  type: 'REQUEST_ITEM',
  payload: {param},
});
export const requestSuccess = result => ({
  type: 'REQUEST_SUCCESS',
  payload: result,
});
