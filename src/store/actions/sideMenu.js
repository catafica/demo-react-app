import * as actionTypes from './actionTypes';

export const addDog = (name, activation) => {
  return {
    type: actionTypes.ADD_DOG,
    value: name,
    activation: activation
  };
};

export  const activate = (id) => {
  return {
    type: actionTypes.ACTIVATE,
    id: id
  };
};

export const initDogs = () => {
  return {
    type: actionTypes.INIT_DOGS
  }
}

export const addDogList = (list) => {
  return {
    type: actionTypes.ADD_DOG_LIST,
    list
  }
}
