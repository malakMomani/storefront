import superagent from 'superagent';

const api = 'https://api-server-0.herokuapp.com/products';

export const getRemoteData = () => (dispatch, state) => {
  // 1- get the remote data with superagent
  // 2- then dispatch an action with the response after we get it.
  console.log("inside getRemoteData");
  console.log(dispatch);
  console.log(state)
  return superagent.get(api).then(res => {
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

export const deleteItem = (product) => {
  return {
    type: 'DELETE',
    payload: product,
  };
}


export const add = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
}

export const show = (bool) => {
  return {
    type: 'SHOW',
    payload: bool,
  };
};

export const reset = () => {
  return {
    type: 'RESET'
  }
}