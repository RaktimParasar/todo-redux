const ADD_ITEMS = "ADD_ITEMS";
const DELETE_ITEMS = "DELETE_ITEMS";
const EDIT_ITEMS = "EDIT_ITEMS";

export const addItems = (textdata) => ({
  type: ADD_ITEMS,
  textdata,
  itemId: Math.random() + 1,
});

export const deleteItems = (itemId) => ({
  type: DELETE_ITEMS,
  itemId,
});

export const editItems = (textdata, itemId) => ({
  type: EDIT_ITEMS,
  textdata,
  itemId,
});
