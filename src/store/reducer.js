import * as actionTypes from './actions/actionTypes';

export const initialState = {
  dogTypes: [],
  dogList: [],
  selectedDog: 'Select a dog breed',
  imageUrl: 'https://images.dog.ceo/breeds/basenji/n02110806_469.jpg',
  allImagesByBreed: [],
  loadingImageState: false
}

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.ADD_DOG){
    const newState = Object.assign({}, state);
    newState.dogTypes = state.dogTypes.concat({name:action.value, id: new Date(),activation:action.activation});
    return newState;
  }
  if (action.type === actionTypes.ADD_DOG_LIST){
    const newState = Object.assign({}, state);
    newState.dogList = action.list;
    return newState;
  }
  if (action.type === actionTypes.ACTIVATE){
    const newState = Object.assign({}, state);
    newState.dogList = state.dogList.map(item =>{
       item.activation = false;
       if (item.id === action.id){
        item.activation = true;
        newState.selectedDog = item.name;
      }
      return item;
    });
    return newState;
  }
  if (action.type === actionTypes.SET_IMAGES_BY_BREED){
    const newState = Object.assign({}, state);
    newState.allImagesByBreed = action.value;
    return newState;
  }
  if (action.type === actionTypes.SET_IMAGE_URL){
    const newState = Object.assign({}, state);
    newState.imageUrl = action.value;
    return newState;
  }
  if (action.type === actionTypes.SET_LOADING_IMAGE_TRUE){
    const newState = Object.assign({}, state);
    newState.loadingImageState = true;
    return newState;
  }
  if (action.type === actionTypes.SET_LOADING_IMAGE_FALSE){
    const newState = Object.assign({}, state);
    newState.loadingImageState = false;
    return newState;
  }
  return state;
};

export default reducer;
