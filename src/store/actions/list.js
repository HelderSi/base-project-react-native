export const add = () => ({type: 'ADD_ITEM', payload: 'Novo'});
export const remove = itemId => ({type: 'REMOVE_ITEM', payload: itemId});
