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

    case 'ADD_TO_CART': {
      const exist = state.cart.find(
        (item: any) => item.title === action.payload.title,
      );

      if (exist) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      const exist = state.cart.find(
        (item: any) => item.title === action.payload.title,
      );

      const nuevoCart = state.cart.filter((item: any) => item !== exist);

      return {
        ...state,
        cart: nuevoCart,
      };
    }

    default:
      return state;
  }
};

export default reducer;
