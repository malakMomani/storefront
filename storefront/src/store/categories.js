let initialState = {
  categories: [{
    name: 'ELECTRONICS',
    description: 'Shop with the latest products and the best prices'
  }, {
    name: 'FOOD',
    description: 'Order delicious meals'
  }
  ],
  activeCategory: 'ELECTRONICS'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      return state.categories.map(category => {
        if (category.name === payload) {
          return { name: category.name, description: category.description }
        }
        return category;
      });
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
