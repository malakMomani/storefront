// setup of initial state
let initialState = {
  categories: [
    {
      name: 'Electronics',
      displayName: 'ELECTRONICS',
      description: 'Shop with the latest products and the best prices'
    },
    {
      name: 'Food',
      displayName: 'FOOD',
      description: 'Order delicious meals'
    },
  ],
  activeCategory: 'Electronics'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
      let activeCategory = payload;
      return { ...state, activeCategory };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}


export const activeCat = (name) => {
  return {
    type: 'ACTIVE',
    payload: name
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}