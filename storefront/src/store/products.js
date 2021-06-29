let initialState = {
  products: [
    {
      name: 'TV',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-03-20-at-7-50-11-am-0-1545168655.png?crop=1.00xw:0.753xh;0,0.139xh&resize=1200:*',
      category: 'electronics',
      price: Math.ceil(Math.random()*(500 - 100) + 100),
      description: 'Travel to another world'
    },
    {
      name: 'MacBook',
      url: 'https://ochanjang.com/wp-content/uploads/2021/01/6t8Zh249QiFmVnkQdCCtHK.jpg',
      category: 'electronics',
      price: Math.ceil(Math.random()*(1000 - 300) + 300),
      description: 'All you need in one place'
    },
    {
      name: 'Shawrma',
      url: 'https://images.deliveryhero.io/image/talabat/MenuItems/17DEC20_SHAWARMA_CIT_637495069473469387.jpg',
      category: 'food',
      price: Math.ceil(Math.random()*(10 - 3) + 3),
      description: 'This is the best'
    },
    {
      name: 'Roasted Chicken',
      url: 'https://www.jocooks.com/wp-content/uploads/2019/06/roast-chicken-1.jpg',
      category: 'food',
      price: Math.ceil(Math.random()*(10 - 5) + 5),
      description: 'yummy'
    },
    {
      name: 'Fizzy Drink',
      url: 'https://pumpingmarvellous.org/wp-content/uploads/2015/11/fizzy-drinks-linked-to-heart-failure-risk.jpg',
      category: 'food',
      price: Math.ceil(Math.random()*(5 - 1) + 1),
    },
  ],
  count: 0,
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let active = payload;
      return {...state, active};
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}


export const active = (categoryName) => {
  return {
    type: 'ACTIVE',
    payload: categoryName,
  };
};

export const reset = () => {
  return {
    type: 'RESET',
  };
};