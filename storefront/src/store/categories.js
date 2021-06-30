let initialState = {
  categories: [{
    name: 'ELECTRONICS',
    description: 'Shop with the latest products and the best prices'
  }, {
    name: 'FOOD',
    description: 'Order delicious meals'
  }, {
    name: 'JEWELERY',
    description:'beauty'
  }, {
    name:'MEN\'S CLOTHING'
  }
  ],
  activeCategory: 'electronics'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let activeCategory = payload.toLowerCase();
      return { ...state, activeCategory };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}
