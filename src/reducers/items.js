const newState = {
  itemData: [],
};

const items = (state = newState, action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      return {
        ...state,
        itemData: [
          ...state.itemData,
          {
            textdata: action.textdata,
            itemId: action.itemId,
          },
        ],
      };
    case "EDIT_ITEMS":
      const editedTodos = state.itemData.map(
        (item) => item.itemId === action.itemId
      );
      return {
        ...state,
        itemData: [
          ...state.itemData,
          {
            textdata: action.textdata,
            itemId: action.itemId,
          },
        ],
        editedTodos,
      };
    case "DELETE_ITEMS":
      const todoItems = state.itemData.filter(
        (item) => item.itemId !== action.itemId
      );
      return {
        ...state,
        itemData: todoItems,
      };
    default:
      return state;
  }
};

export default items;
