let initialState = {
  cart: [],
  count: 0,
  show: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'INCREMENT':
      return payload.disabled ? state : { ...state, count: state.count + 1 };
    case 'ADD':
      let newState = {
        cart: [...state.cart, payload],
        count: state.count + 1
      }
      return newState;

    case 'SHOW':
      return {
        cart: state.cart,
        display: state.display,
        count: state.count,
        show: payload,
      };

    case 'DELETE':
      const newProducts = state.cart.filter(
        (product) => product.item !== payload.item
      );
      return {
        cart: newProducts,
        count: state.count - 1,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }

}