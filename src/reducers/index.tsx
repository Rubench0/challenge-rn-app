const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES': {
      console.log('mamalo');
    }

    default:
      return state;
  }
};

export default reducer;
