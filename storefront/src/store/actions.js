
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