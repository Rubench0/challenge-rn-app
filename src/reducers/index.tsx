const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAV': {
      const exist = state.favs.find(
        (item: any) => item.title === action.payload.title,
      );
      if (exist) {
        console.log('This Item is already there');
      } else {
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      }
    }

    case 'REMOVE_FROM_FAV': {
      const exist = state.favs.find(
        (item: any) => item.title === action.payload.title,
      );

      const nuevoFav = state.favs.filter((item: any) => item !== exist);

      return {
        ...state,
        favs: nuevoFav,
      };
    }

    case 'ALREADY_THERE': {
      console.log('This item is already there');
    }

    default:
      return state;
  }
};

export default reducer;
