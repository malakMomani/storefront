import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/products';

export const getRemoteData = () => async (dispatch, state) => {
  // 1- get the remote data with superagent
  // 2- then dispatch an action with the response after we get it.
  console.log("inside getRemoteData");
  console.log(dispatch);
  console.log(state)
  return await superagent.get(api).then(res => {
    dispatch(getAction(res.body));
  });
}

export const getAction = payload => {
  return {
    type: 'GET',
    payload: payload
  }
}


export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const show = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool,
  };
};

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};
export const reset = () => {
  return {
    type: 'RESET'
  }
}