import reducer from './reducer';
import * as actionTypes from './actions/actionTypes';
import {initialState} from './reducer';



  it('adds dog to dogTypes list', () => {
    const dog = {name: 'akita', id: new Date(), activation:false}
    const newState = Object.assign({}, initialState);
    newState.dogTypes = [{name: dog.name, id: new Date(), activation:false}];

    expect(reducer(initialState, {type: actionTypes.ADD_DOG, value:dog.name, activation:dog.activation}))
    .toEqual(newState);
  })

  it('sets the dogList', () => {
    const list = [{name:'akita', id: new Date(), activation:false},{name:'huskey', id: new Date(), activation:false}];
    const newState = Object.assign({}, initialState);
    newState.dogList = list;

    expect(reducer(initialState, {type: actionTypes.ADD_DOG_LIST, list:list}))
    .toEqual(newState);
  });

  it('sets true the `activation` property of a dog from the dogList and sets the `selectedDog`', () =>{
    const newState = Object.assign({}, initialState);
    const id = new Date();
    newState.dogList.map(item => {
      item.activation = false;
      if (item.id === id){
        item.activation = true;
        newState.selectedDog = item.name;
      }
      return item;
    })

    expect(reducer(initialState, {type: actionTypes.ACTIVATE, id}))
    .toEqual(newState);
  })

  it('sets all availiable image urls in the `allImagesByBreed` array', () =>{
    const url = ['url1', 'url2'];
    const newState = Object.assign({}, initialState);
    newState.allImagesByBreed = url;

    expect(reducer(initialState, {type: actionTypes.SET_IMAGES_BY_BREED, value:url}))
    .toEqual(newState);
  })

  it('sets the image url that the user sees', () => {
    const url = 'https://example.com';
    const newState = Object.assign({}, initialState);
    newState.imageUrl = url;

    expect(reducer(initialState, {type: actionTypes.SET_IMAGE_URL, value:url}))
    .toEqual(newState);
  })

  it('sets true the `loadingImageState`', () => {
      const newState = Object.assign({}, initialState);
      newState.loadingImageState = true;

      expect(reducer(initialState, {type: actionTypes.SET_LOADING_IMAGE_TRUE}))
      .toEqual(newState);
  })

  it('sets false the `loadingImageState`', () => {
      const newState = Object.assign({}, initialState);
      newState.loadingImageState = false;

      expect(reducer(initialState, {type: actionTypes.SET_LOADING_IMAGE_FALSE}))
      .toEqual(newState);
  })
