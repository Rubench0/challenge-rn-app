const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAV': {
      return {
        ...state,
        favs: [...state.favs, action.payload],
      };
    }

    default:
      return state;
  }
};

export default reducer;
